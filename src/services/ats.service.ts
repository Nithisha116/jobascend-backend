// services/ats.service.ts

type ATSResult = {
  score: number;
  matchedSkills: string[];
  missingSkills: string[];
};

export const calculateATSScoreService = (
  resumeText: string,
  jobDescription: string
): ATSResult => {

  // 🔹 basic cleanup
  const resume = resumeText.toLowerCase();
  const job = jobDescription.toLowerCase();

  // 🔹 predefined skills list (safe + interview friendly)
  const skillBank = [
    "javascript", "typescript", "react", "node", "express",
    "mongodb", "sql", "html", "css", "git", "api", "rest",
    "aws", "docker"
  ];

  // 🔹 extract skills
  const resumeSkills = skillBank.filter(skill => resume.includes(skill));
  const jobSkills = skillBank.filter(skill => job.includes(skill));

  const matchedSkills = resumeSkills.filter(skill =>
    jobSkills.includes(skill)
  );

  const missingSkills = jobSkills.filter(skill =>
    !resumeSkills.includes(skill)
  );

  // 🔹 skill score (40%)
  const skillScore =
    jobSkills.length === 0
      ? 0
      : (matchedSkills.length / jobSkills.length) * 40;

  // 🔹 keyword score (30%) – reuse skills as keywords
  const keywordScore =
    jobSkills.length === 0
      ? 0
      : (matchedSkills.length / jobSkills.length) * 30;

  // 🔹 experience score (20%) – basic fresher-safe assumption
  const experienceScore = resume.includes("fresher") ? 20 : 10;

  // 🔹 job title score (10%)
  const titleScore = resume.includes("developer") ? 10 : 5;

  const totalScore = Math.round(
    skillScore + keywordScore + experienceScore + titleScore
  );

  return {
    score: totalScore,
    matchedSkills,
    missingSkills
  };
};
