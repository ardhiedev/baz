import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import Setting from "components/Setting";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import Section2 from "pages-sections/fashion-shop-2/Section2";
import Section3 from "pages-sections/fashion-shop-2/Section3";
import Section4 from "pages-sections/fashion-shop-2/Section4";
import Section5 from "pages-sections/fashion-shop-2/Section5";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import Section7 from "pages-sections/fashion-shop-2/Section7";
import Section8 from "pages-sections/fashion-shop-2/Section8";
import api from "utils/api/fashion-shop-2"; // =======================================================

// =======================================================
const FashionShop2 = (props) => {
  const theme = useTheme();
  return (
    <ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Fashion shop template v2" />
      <Box bgcolor="white">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 products={props.products} />
        <Section5 />
        <Section6 products={props.featureProducts} />
        <Section7 blogs={props.blogs} />
        <Section8
          saleProducts={props.saleProducts}
          latestProducts={props.latestProducts}
          popularProducts={props.popularProducts}
          bestWeekProducts={props.bestWeekProducts}
        />
      </Box>

      <Setting />
    </ShopLayout1>
  );
};

export async function getStaticProps() {
  const blogs = await api.getBlogs();
  const products = await api.getProducts();
  const saleProducts = await api.getSaleProducts();
  const latestProducts = await api.getLatestProducts();
  const popularProducts = await api.getPopularProducts();
  const featureProducts = await api.getFeatureProducts();
  const bestWeekProducts = await api.getBestWeekProducts();
  return {
    props: {
      blogs,
      products,
      saleProducts,
      latestProducts,
      popularProducts,
      featureProducts,
      bestWeekProducts,
    },
  };
}
export default FashionShop2;