import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { motion } from "framer-motion";
// @ts-nocheck
type Product = {
  title: string;
  price: string;
  rating: number;
  reviews: string;
  image: string;
};

type ProductsByCategory = Record<string, Product[]>;
const categories = ["All", "Boots", "Shoes", "Sandals", "Slipper", "Jogging"];
const allProducts: ProductsByCategory = {
  All: [
    {
      title: "Nike Running",
      price: "$210",
      rating: 4.9,
      reviews: "200k+",
      image: "/1.png",
    },
    {
      title: "Nike Air Max",
      price: "$190",
      rating: 4.8,
      reviews: "150k+",
      image: "/2.png",
    },
  ],
  Boots: [],
  Shoes: [],
  Sandals: [],
  Slipper: [],
  Jogging: [],
};

export default function AllRunPage() {
  // const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="bg-black text-white min-h-screen font-sans bg bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 ">
          <h1 className="text-2xl font-bold text-yellow-400">AllRun</h1>
          <nav className="hidden md:flex space-x-8 text-sm">
            <a href="#" className="hover:text-yellow-400">Home</a>
            <a href="#" className="hover:text-yellow-400">About Us</a>
            <a href="#" className="hover:text-yellow-400">Category</a>
          </nav>
          <div className="w-8 h-8 rounded-full bg-gray-700" />
        </header>


        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-20 items-center  relative overflow-hidden">
          <motion.div
            className="z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-extrabold leading-tight">
              Summer <span className="text-yellow-400">Collections</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-md">
              Feel the difference of real comfort as you go. Here's to the highest level of strength and minimal look.
            </p>
            <Button className="mt-6 bg-yellow-400 text-black hover:bg-yellow-300">Buy Now</Button>

            <div className="flex gap-12 mt-10">
              <div>
                <p className="text-3xl font-bold text-yellow-400">90k+</p>
                <p className="text-gray-400">Collections</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">100k+</p>
                <p className="text-gray-400">Users</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <p className="text-xl font-bold text-white">4.9</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4" fill="currentColor" />)}
              </div>
              <span className="text-sm text-gray-400 ml-2">200k+ Total Reviews</span>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="absolute inset-0 flex items-center justify-center text-[8rem] text-gray-800 font-extrabold opacity-10 select-none z-0">
              NIKE
            </h1>
            <motion.img
              src="/3.png"
              alt="Nike Shoe"
              className="w-full max-w-lg mx-auto md:mx-0 relative z-10"
              initial={{ scale: 0.9, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.05, rotate: 3, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.div>
        </section>


        {/* Category Tabs */}
        <section className="p-10">
          <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Categories</h3>
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="flex justify-center flex-wrap gap-4 mb-8 bg-transparent border-none">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="uppercase text-white data-[state=active]:bg-yellow-400 data-[state=active]:text-black border border-gray-700"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat} value={cat}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-wrap justify-center gap-6"
                >
                  {(allProducts[cat] || []).map((product, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="w-[300px] rounded-xl border border-gray-700 bg-[#1e1e1e] p-4"
                    >
                      <div className="relative">
                        <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
                        <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs">
                          {product.rating} <span className="text-gray-800">({product.reviews})</span>
                        </div>
                      </div>
                      <h4 className="text-white text-lg font-semibold mb-1">{product.title}</h4>
                      <p className="text-yellow-400 text-sm mb-2">{product.price}</p>
                      <p className="text-gray-500 text-xs mb-1">Running Nike - Collection 2022</p>
                      <div className="flex items-center gap-1 text-yellow-400 text-sm mb-4">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="h-4 w-4 fill-yellow-400" />
                        ))}
                      </div>
                      <Button className="bg-yellow-400 text-black w-full hover:bg-yellow-300">Buy Now</Button>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </section>


        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 p-10 mt-10 text-sm">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-bold mb-2">AllRun</h4>
              <p className="mb-1">Experience the best comfort in every step</p>
              <p>New York, NY</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Company</h4>
              <p>About</p>
              <p>Careers</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Support</h4>
              <p>Contact</p>
              <p>Help Center</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}