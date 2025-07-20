import { useState } from "react";

export default function Quiz() {
  const [activeQuestionIndex, setActiveQuestiionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  return <p>Currently active Question</p>;
}
