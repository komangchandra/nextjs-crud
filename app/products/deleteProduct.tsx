"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  title: string;
  price: number;
  categoryId: number;
};

const DeleteProduct = ({ product }: { product: Product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleDelete = async (productId: number) => {
    await axios.delete(`/api/products/${productId}`);
    router.refresh();
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleModal}>
        Delete
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg pt-3">
            Are you sure to delete {product.title}?
          </h3>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleModal}>
              No
            </button>
            <button
              type="button"
              onClick={() => handleDelete(product.id)}
              className="btn btn-primary">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
