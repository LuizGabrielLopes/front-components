import Header from "../components/Header";
import Section from "../components/Home"
import Container from "../components/Container";
import Categories from "../components/Categories";
import CategorieContainer from "../components/CategorieContainer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Section />
      <Container />
      <CategorieContainer />
      <Container />
      <Footer />
    </div>
  )
}