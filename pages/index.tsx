import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import GradientLayout from "../components/gradientLayot";

export default function Home() {
  return (
    <GradientLayout
      color="green"
      subtitle="Profile"
      title="Israel itua"
      description="15 Public playlists"
      image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
    >
      <p>Homepage</p>
    </GradientLayout>
  );
}
