import Link from "next/link";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Private = () => {
  return (
    <div>
      <h1>Private Content</h1>
      <p>This page can only be viewed by authenticated users.</p>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  );
};
export default Private;

export const getServerSideProps = withPageAuthRequired();
