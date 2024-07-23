import Layout from "../../components/layout/Layout"
import HeroSection from "../../components/heroSection/HeroSection"
import BlogPostCard from "../../components/blogPostCard/BlogPostCard"
// import Footer from "../../components/footer/Footer"


function Home() {
  return (
    <Layout>
      <HeroSection />
      <BlogPostCard />
      {/* <Footer /> */}
    </Layout>
  )
}

export default Home
