import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import backgroundImage from "public/house-7497001.svg";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
        }}
        className="pt-40 pb-20 bg-slate-100"
      >
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MarketingLayout;
