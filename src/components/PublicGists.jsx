// src/components/PublicGists.jsx
import { useFetch } from "../hooks/useFetch";

/**
 * A React component that fetches public gists from the GitHub API
 * and renders them as an unordered list of links.
 *
 * @returns {JSX.Element} A React element representing the component.
 */
const PublicGists = () => {
  const {
    data: gists,
    loading,
    error,
  } = useFetch("https://api.github.com/gists/public");

  if (loading) return <p>Loading public gists...</p>;
  if (error) return <p>Error fetching gists: {error.message}</p>;

  return (
    <div>
      <h2>Public Gists</h2>
      <ul>
        {gists.map((gist) => (
          <li key={gist.id}>
            <a href={gist.html_url} target="_blank" rel="noopener noreferrer">
              {gist.description || "No description"}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicGists;
