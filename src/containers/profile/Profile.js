import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setProfile] = useState(null);

  useEffect(() => {
    // 1. Changed "true" to boolean true
    if (openSource.showGithubProfile === true) {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw new Error("Network response was not ok");
        })
        .then(response => {
          setProfile(response.data.user);
        })
        .catch(error => {
          console.error(
            `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
          );
          setProfile("Error");
          openSource.showGithubProfile = false; // 2. Changed to boolean false
        });
    }
  }, []);

  // 3. Changed "true" to boolean true here as well
  const shouldShowGithub = 
    openSource.display &&
    openSource.showGithubProfile === true &&
    prof &&
    typeof prof === "object";

  if (shouldShowGithub) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  }

  // 4. Changed "true" to boolean true here too
  if (!prof && openSource.showGithubProfile === true) {
    return renderLoader();
  }

  return <Contact />;
}