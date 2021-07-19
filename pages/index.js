import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

const Home = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <div>
        <img src={user.picture} />
        <p>{user.email}</p>
        <p>
          <Link href="/private">
            <a>View Private Content</a>
          </Link>
        </p>
        <p>
          <Link href="/api/auth/logout">
            <a>Logout</a>
          </Link>
        </p>
      </div>
    );
  }
  return (
    <p>
      <Link href="/api/auth/login">
        <a>Login</a>
      </Link>
    </p>
  );
};

export default Home;
