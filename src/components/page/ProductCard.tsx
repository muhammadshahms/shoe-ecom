import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type Product = {
  title: string;
  price: string;
  rating: number;
  reviews: string;
  image: string;
};

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-gray-700 bg-[#1e1e1e] p-4"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-4"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs">
          {product.rating}
          <span className="text-gray-800">({product.reviews})</span>
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

      <Button
        className="bg-yellow-400 text-black w-full hover:bg-yellow-300"
        onClick={() => onViewDetails(product)}
      >
        View Details
      </Button>
    </motion.div>
  );
};

export default ProductCard;
