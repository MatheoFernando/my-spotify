
import Image from 'next/image'
import { Home as HomeIcon , Search ,  LibraryBig , Heart , ChevronLeft ,ChevronRight , Play , SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react';

export default function Home() {
  return (
   <div className='flex h-screen flex-col'>
      <div className='flex flex-1 gap-3  p-3'>
          <aside className='bg-[#1a1a1a] p-6 w-52 tex-white rounded-xl '>
           <nav className='space-y-5'>
            <a href="#" className='flex text-[#DBDBDB] hover:text-white  gap-2 text-sm gap-2 font-semibold items-center  '>
              <HomeIcon /> 
              Home
              </a>
              <a href="#" className='flex text-[#DBDBDB]  hover:text-white gap-2 text-sm gap-2 font-semibold items-center  '>
              <Search />
              Search
              </a>
              <a href="#" className='flex text-[#DBDBDB]  hover:text-white gap-2 text-sm mb-4 gap-2 font-semibold items-center  '>
            <LibraryBig />
            Your library
            </a>
         
            </nav>
            <nav className='mt-4 pt-10 flex flex-col gap-4 border-zinc-400 border-t'>
               <a href="#" className='flex text-[#DBDBDB]  hover:text-white gap-2 text-sm gap-2 font-semibold items-center  '>
                  <Heart />
                Liked songs
                </a>
               <a href="#" className='flex text-[#DBDBDB]  hover:text-white gap-2 text-sm gap-2 font-semibold items-center  '>Liked songs</a>
            </nav>
          
          </aside>
      
          <main className='flex-1 bg-[#212121] p-6 rounded-xl'>
            <div className='flex items-center gap-4'>
                     <button className='bg-black/20 text-[#DBDBDB] p-1 rounded-full  font-semibold text-lg'>
                           <ChevronLeft/>
                     </button>
                     <button className='bg-black/20 text-[#DBDBDB] p-1 rounded-full font-semibold text-lg'>
                           <ChevronRight />
                     </button>
            </div>
            <h1 className='font-bold text-3xl mt-4 text-[#DBDBDB]'>Good Afternoon</h1>
            <section className='grid grid-cols-3 gap-4 mt-2'>
               <a className='bg-white/10 group rounded text-[#DBDBDB] hover:bg-white/20 transition-colors overflow-hidden flex items-center gap-4'>
               <Image src="/album-justin.jpg" alt='album of spotify' width={80} height={80}/>
               <strong>Liked Songs</strong>
               <button className='bg-green-500 rounded-full p-2 mr-8 pl-1 ml-auto h w-12 h-12 text-black flex items-center justify-center invisible group-hover:visible'>
                  <Play />
               </button>
               </a>
               <a className='bg-white/10 group rounded text-[#DBDBDB] hover:bg-white/20 transition-colors overflow-hidden flex items-center gap-4'>
               <Image src="/ayra.jpg" alt='album of spotify' width={80} height={80}/>
               <strong>Daily Mix 1</strong>
               <button className='bg-green-500 rounded-full p-2 mr-8 pl-1 ml-auto h w-12 h-12 text-black flex items-center justify-center invisible group-hover:visible'>
                  <Play />
               </button>
               </a>
               <a className='bg-white/10 group rounded text-[#DBDBDB] hover:bg-white/20 transition-colors overflow-hidden flex items-center gap-4'>
               <Image src="/vgbeats.jpg" alt='album of spotify' width={80} height={80}/>
               <strong>Daily Mix 2</strong>
               <button className='bg-green-500 rounded-full p-2 mr-8 pl-1 ml-auto h w-12 h-12 text-black flex items-center justify-center invisible group-hover:visible'>
                  <Play />
               </button>
               </a>
               <a className='bg-white/10 group rounded text-[#DBDBDB] hover:bg-white/20 transition-colors overflow-hidden flex items-center gap-4'>
               <Image src="/album-justin.jpg" alt='album of spotify' width={80} height={80}/>
               <strong>Liked Songs</strong>
               <button className='bg-green-500  rounded-full p-2 mr-8 pl-1 ml-auto h w-12 h-12 text-black flex items-center justify-center invisible group-hover:visible'>
                  <Play />
               </button>
               </a>
               <a className='bg-white/10 group rounded text-[#DBDBDB] hover:bg-white/20 transition-colors overflow-hidden flex items-center gap-4'>
               <Image src="/styla.jpg" alt='album of spotify' width={80} height={80}/>
               <strong>Daily Mix 1</strong>
               <button className='bg-green-500 rounded-full p-2 mr-8 pl-1 ml-auto h w-12 h-12 text-black flex items-center justify-center invisible group-hover:visible'>
                  <Play />
               </button>
               </a>
               <a className='bg-white/10 group rounded text-[#DBDBDB] hover:bg-white/20 transition-colors overflow-hidden flex items-center gap-4'>
               <Image src="/vgbeats.jpg" alt='album of spotify' width={80} height={80}/>
               <strong>Daily Mix 2</strong>
               <button className='bg-green-500 rounded-full p-2 mr-8 pl-1 ml-auto h w-12 h-12 text-black flex items-center justify-center invisible group-hover:visible'>
                  <Play />
               </button>
               </a>
              
              
            </section>
            <h2 className='font-bold text-2xl mt-4 text-[#DBDBDB]'>Made for João Frenando</h2>
               <div className='grid grid-cols-5 gap-4 mt-4'>
                  <a className='bg-white/5 p-3 rounded hover:bg-white/10 group flex flex-col gap-2'>
                  <Image src="/vgbeats.jpg" alt='album of spotify' width={50} height={50} className='w-full'/>
                  <strong className='font-semibold text-white text-sm'>Daily 1</strong>
                  <span className='text-xs text-zinc-400'>jamse arthur, ayrr , vg beats and more...</span>
                  </a>
                  <a className='bg-white/5 p-3 rounded hover:bg-white/10 group flex flex-col gap-2'>
                  <Image src="/vgbeats.jpg" alt='album of spotify' width={50} height={50} className='w-full'/>
                  <strong className='font-semibold text-white text-sm'>Daily 1</strong>
                  <span className='text-xs text-zinc-400'>jamse arthur, ayrr , vg beats and more...</span>
                  </a>
                  <a className='bg-white/5 p-3 rounded hover:bg-white/10 group flex flex-col gap-2'>
                  <Image src="/vgbeats.jpg" alt='album of spotify' width={20} height={20} className='w-full'/>
                  <strong className='font-semibold text-white text-sm'>Daily 1</strong>
                  <span className='text-xs text-zinc-400'>jamse arthur, ayrr , vg beats and more...</span>
                  </a>
                  <a className='bg-white/5 p-3 rounded hover:bg-white/10 group flex flex-col gap-2'>
                  <Image src="/vgbeats.jpg" alt='album of spotify' width={20} height={20} className='w-full'/>
                  <strong className='font-semibold text-white text-sm'>Daily 1</strong>
                  <span className='text-xs text-zinc-400'>jamse arthur, ayrr , vg beats and more...</span>
                  </a>
                  <a className='bg-white/5 p-3 rounded hover:bg-white/10 group flex flex-col gap-2'>
                  <Image src="/vgbeats.jpg" alt='album of spotify' width={20} height={20} className='w-full'/>
                  <strong className='font-semibold text-white text-sm'>Daily 1</strong>
                  <span className='text-xs text-zinc-400'>jamse arthur, ayrr , vg beats and more...</span>
                  </a>
               </div>
          </main>
          </div>
      <footer className='p-6 text-white flex items-center justify-between '>
         <div className='flex items-center justify-center gap-4'>
         <Image src="/album-justin.jpg" alt='album of spotify' width={50} height={50} className='rounded-full'/>
         <div className='flex flex-col gap-1'>
            <strong className='text-sm font-normal'>justin Bieber</strong>
            <span className='text-xs text-zinc-400'>sorry</span>
         </div>
         </div>
         <div className='flex flex-col items-center'>
            <div className='flex items-center gap-3'>
         <Shuffle/>
         <SkipBack/>
         <button className='bg-white rounded-full p-2  w-10 h-10 text-black flex items-center justify-center'>    
                 <Play /> 
               </button>
         
         <SkipForward/>
         <Repeat/>
         </div>
         </div>
         <div>
            vida
         </div>
      </footer>
   </div>
  )
}
