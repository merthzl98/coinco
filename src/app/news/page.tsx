import axios from "axios";
import Image from "next/image";

interface IDog {
  message: string;
}

const getDog = async (): Promise<IDog> => {
  const response: any = await axios.get<IDog>(
    "https://dog.ceo/api/breeds/image/random"
  );

  return response.data;
};

export default async function Page() {
  const srcDog = await getDog();

  return <Image src={srcDog.message} alt="dog" width={128} height={128} />;
}
