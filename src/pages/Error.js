import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <main>
        <MainNavigation />
        <h1>This is the error page</h1>
        <p>No page found with the given url</p>
      </main>
    </>
  );
}

export default ErrorPage;
