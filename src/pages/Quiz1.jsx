import QuizCard from "../components/QuizCard";
import FloatingDecor from "../components/FloatingDecor";
import { quiz1 } from "../data/content";

export default function Quiz1({ onNext }) {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center px-6">
      <FloatingDecor />
      <QuizCard
        question={quiz1.question}
        options={quiz1.options}
        correctIndex={quiz1.correctIndex}
        onContinue={onNext}
      />
    </section>
  );
}
