import Navbar from "../../organisms/Navbar";
import Footer from "../../organisms/Footer";
import NFTset from "../../organisms/NFTset";
import Header from "../../organisms/Header";
import SubscribeForm from "../../organisms/SubscribeForm";

const ComingSoon = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SubscribeForm />
      <NFTset className="nft-set" />
      <Footer />
    </div>
  );
};

export default ComingSoon;
