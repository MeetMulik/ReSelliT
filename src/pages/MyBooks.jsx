import React, { useEffect } from "react";
import BookCard from "../components/BookCard";
import MyBookCard from "../components/MyBookCard";
import { useStateValue } from "../context/StateProvider";

const MyBooks = () => {
  const [{ user }, dispatch] = useStateValue();
  const [{ books }, dipatch] = useStateValue();
  console.log(books);
  const filteredBooks = books.filter((book) => book.uid === user.uid);
  console.log(filteredBooks);

  return (
    <div className="min-h-[100vh] flex flex-wrap gap-4 items-center justify-center">
      {filteredBooks.map((book, id) => (
        <MyBookCard key={id} {...book} />
      ))}
    </div>
  );
};

export default MyBooks;
