import Image from "next/image";

export default function Naujienos() {
  return (
      <>
          <Image 
              src="/KMNlogo.svg"
              alt="logo"
              width={109}
              height={40}
              style={{paddingTop: 10}}
              priority
          />
        {/* <h1>Naujienos</h1> */}
      </>

  )
}