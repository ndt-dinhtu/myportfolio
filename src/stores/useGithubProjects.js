// useGithubProjects.js (hoặc hook fetch dữ liệu của bạn)
import { useState, useEffect } from "react";

const useGithubProjects = (username) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // useGithubProjects.js
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          },
        );
        const data = await response.json();

        const formattedData = data
          .filter(
            (repo) =>
              !repo.fork && // Không lấy repo đi copy (fork)
              repo.topics.includes("portfolio"), // CHỈ LẤY repo có tag 'portfolio'
          )
          .map((repo) => ({
            id: repo.id,
            title: repo.name.replace(/-/g, " "),
            desc: repo.description,
            // Lấy tag ngôn ngữ chính cộng với các topics khác làm tech stack
            tech: [
              repo.language,
              ...repo.topics.filter((t) => t !== "portfolio"),
            ].filter(Boolean),
            github: repo.html_url,
            demo: repo.homepage || "#",
            image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
          }));

        setProjects(formattedData);
      } catch (error) {
        console.error("Lỗi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { projects, loading };
};

export default useGithubProjects;
