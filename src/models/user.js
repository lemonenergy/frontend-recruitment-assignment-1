const user = ({
  login,
  avatar_url: avatar,
  name,
  bio,
  public_repos: repos,
  public_gists,
}) => {
  return {
    avatar,
    login,
    repos,
    public_gists,
    bio,
    name,
  }
}

export default user
