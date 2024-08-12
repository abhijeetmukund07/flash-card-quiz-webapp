import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./AddCard.css"; // Import the custom CSS for styling

function AddCard() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [isOtherCategory, setIsOtherCategory] = useState(false);

  const selectedCategory = watch("category");

  let categories = [
    { id: 1, name: "DSA" },
    { id: 2, name: "Web Dev" },
    { id: 3, name: "App Dev" },
    { id: 4, name: "DBMS" },
  ];

  useEffect(() => {
    if (selectedCategory === "other") {
      setIsOtherCategory(true);
    } else {
      setIsOtherCategory(false);
    }
  }, [selectedCategory]);

  //fill it
  function onCreateCategory() {}

  //fill it
  function onSubmit() {}

  const handleFormSubmit = (data) => {
    if (isOtherCategory) {
      onCreateCategory(data.newCategory); // Create new category
    }
    onSubmit(data); // Submit the flashcard data
    reset(); // Reset the form
  };

  return (
    <div className="addcard-form-container">
      <h2 className="fs-1">Add New Flashcard</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {/* Question Input */}
        <div className="addcard-form-group">
          <label htmlFor="question">Question</label>
          <input
            id="question"
            type="text"
            {...register("question", { required: "Question is required" })}
          />
          {errors.question && <p className="error-message">{errors.question.message}</p>}
        </div>

        {/* Answer Input */}
        <div className="addcard-form-group">
          <label htmlFor="answer">Answer</label>
          <textarea id="answer" {...register("answer", { required: "Answer is required" })} />
          {errors.answer && <p className="error-message">{errors.answer.message}</p>}
        </div>

        {/* Category Dropdown */}
        <div className="addcard-form-group">
          <label htmlFor="category">Category</label>
          <select id="category" {...register("category", { required: "Category is required" })}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
          {errors.category && <p className="error-message">{errors.category.message}</p>}
        </div>

        {/* New Category Input */}
        {isOtherCategory && (
          <div className="form-group">
            <label htmlFor="newCategory">New Category</label>
            <input
              id="newCategory"
              type="text"
              {...register("newCategory", { required: "New Category is required" })}
            />
            {errors.newCategory && <p className="error-message">{errors.newCategory.message}</p>}
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Add Flashcard
        </button>
      </form>
    </div>
  );
}

export default AddCard;
