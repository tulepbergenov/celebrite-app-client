import { appTitle } from "@/shared/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle(),
};

const Home = () => {
  return (
    <section>
      <header>
        <h1>Celebrite</h1>
      </header>
    </section>
  );
};

export default Home;
