//server component by default
//fetch data inside a server component



//acess backend resources directly
//we cant use any hook inside a server component also cant add event

export default function Home() {

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
  <h1>This is our home Page at root level</h1>
    </div>
  );
}
