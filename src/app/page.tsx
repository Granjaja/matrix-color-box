import Matrix from "@/components/Matrix";

export default function Home() {
  return (
    <div className=" font-semibold text-orange-500 justify-items-center">
      <div>      
        <h1 className=' text-2xl p-5 m-5'>Color Box Matrix</h1>
      </div>
    <Matrix/>
    </div>
    
  );
}
