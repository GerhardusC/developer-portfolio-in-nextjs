import Background from "@/components/Background";
import MyLayout from "@/components/MyLayout";

export default function Home() {
  return (
    <div>
      <MyLayout>
        {/* This is the canvas that contains the 3D environment. */}
        <Background />
      </MyLayout>
    </div>
  );
}
