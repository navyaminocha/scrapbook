import QuizCard from "../components/QuizCard";
import FloatingDecor from "../components/FloatingDecor";
import { quiz2 } from "../data/content";

export default function Quiz2({ onNext }) {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center px-6">
      <FloatingDecor />
      <QuizCard
        question={quiz2.question}
        options={quiz2.options}
        correctIndex={quiz2.correctIndex}
        onContinue={onNext}
      />
    </section>
  );
}
