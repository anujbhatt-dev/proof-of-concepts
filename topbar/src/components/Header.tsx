"use client"
import { categories, CategoryType } from "@/utils/category-seed";
import Image from "next/image";
import { useState } from "react";

// Define Enum for Category Types


const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedBasecategory, setSelectedBasecategory] = useState<string | null>(null);
  const [categoryHover,setCategoryHover] = useState<string | null>(null);
  const [subCategoryHover,setSubCategoryHover] = useState<string | null>(null);
  

  // Filter categories based on type
  const topCategories = categories.filter((cat) => cat.categoryType === CategoryType.TOP);
  const subcategories = categories.filter(
    (cat) => cat.categoryType === CategoryType.SUB && cat.parent === selectedCategory
  );
  const baseCategories = categories.filter(
    (cat) => cat.categoryType === CategoryType.BASE && cat.parent === selectedSubcategory
  );


  const handleCategoryHover = (topCat:string) =>{
    setCategoryHover(topCat)
    setSelectedCategory(topCat)
  }

  const handleSubCategoryHover = (subCat:string) =>{    
    setSelectedSubcategory(subCat)
    setSubCategoryHover(subCat)
  }

  const handleMouseLeave = () =>{
    setSelectedBasecategory(null)
    setSelectedSubcategory(null)
    setSelectedCategory(null)
    setCategoryHover(null)
  }

  return (<>
    <div className="h-[4rem] font-serif"></div>
    <div className="px-6 mx-auto border-b border-black/10 flex justify-between h-[4rem] fixed top-0 right-0 left-0 z-10 bg-slate-200">
         <Image src={"/next.svg"} alt="" width={96} height={32} />
         <ul className="flex text-[0.9rem] h-full justify-center items-center flex-grow">
         {topCategories.map((item)=>(
            <li onMouseOver={()=>handleCategoryHover(item.title)} key={item.title} className={`${selectedCategory===item.title && "border-black"}  text-[0.8rem] cursor-pointer min-w-[7rem] flex justify-center items-center h-full border-b-2 hover:border-b-2 border-transparent  hover:border-black transition-all duration-75 px-2 uppercase font-semibold`}>{item.title}</li>
        ))}
        </ul>
    </div>
    {
    categoryHover &&
    <div  
    onMouseLeave={handleMouseLeave}
    className="animate-fromTop bg-slate-200 shadow-sm absolute top-[4rem] w-full font-sans">
            <div className="min-h-[65vh] grid grid-cols-6">
                 <aside className="  bg-slate-300 text-black pt-12 border-r border-black/10">
                     {subcategories.map((item)=>(
                        <div onClick={()=>handleSubCategoryHover(item.title)} className={`${selectedSubcategory===item.title ? "border-slate-500 bg-slate-200" : "border-slate-500/0"} py-2 pl-12 border-l-4 hover:border-slate-500 hover:bg-slate-200 transition-all duration-150 text-[0.8rem]`} key={item.title}>{item.title} {item.parent}</div>
                     ))}
                 </aside>
                 {!selectedSubcategory?
                 <div className="p-8 col-span-5 bg-zinc-200 ">
                        {selectedSubcategory?selectedSubcategory:
                            <div>
                                <div className="text-[1rem] border-b border-purple-500/10 pb-2 font-bold">{selectedCategory}</div>
                                    <div className="grid grid-cols-4 space-x-4 py-4 overflow-x-auto">
                                    <div className="relative h-[50vh] w-auto"> {/* Ensure relative positioning and defined height */}
                                        <Image 
                                            alt="" 
                                            fill
                                            className="object-cover" 
                                            src={`/i${selectedCategory}.jpg`} 
                                        />
                                        <div className="absolute bottom-2 left-2 text-[4rem] text-white font-bold font-serif">
                                            <h3 className="">T-Shirts</h3>
                                        </div>
                                    </div>
                                    <div className="relative h-[50vh] w-auto"> {/* Ensure relative positioning and defined height */}
                                        <Image 
                                            alt="" 
                                            fill
                                            className="object-cover" 
                                            src={`/i${selectedCategory}.jpg`} 
                                        />
                                        <div className="absolute bottom-2 left-2 text-[4rem] text-white font-bold font-serif">
                                            <h3 className="">Trousers</h3>
                                        </div>
                                    </div>
                                    <div className="relative h-[50vh] w-auto"> {/* Ensure relative positioning and defined height */}
                                        <Image 
                                            alt="" 
                                            fill
                                            className="object-cover" 
                                            src={`/i${selectedCategory}.jpg`} 
                                        />
                                        <div className="absolute bottom-2 left-2 text-[4rem] text-white font-bold font-serif">
                                            <h3 className="">Pants</h3>
                                        </div>
                                    </div>
                                    <div className="relative h-[50vh] w-auto"> {/* Ensure relative positioning and defined height */}
                                        <Image 
                                            alt="" 
                                            fill
                                            className="object-cover" 
                                            src={`/i${selectedCategory}.jpg`} 
                                        />
                                        <div className="absolute bottom-2 left-2 text-[4rem] text-white font-bold font-serif">
                                            <h3 className="">Old Money</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                 </div>:
                 <>
                 <div className="border-r border-black/10">
                 <aside className=" text-black font-sans pt-12">
                     {baseCategories.map((item,i)=>(
                        <div onClick={()=>setSelectedBasecategory(item.title)} className={`${selectedBasecategory===item.title ? "border-slate-500 bg-slate-300" : "border-slate-500/0"} py-2 pl-12 border-l-4 hover:border-slate-500 hover:bg-slate-300 transition-all duration-150 text-[0.8rem] m-2 rounded-r-md`} key={item.title+i}>{item.title} {item.parent}</div>
                     ))}
                 </aside>
                 </div>
                 <div className="p-8 col-span-4">
                        <div className="text-[1rem] border-b border-purple-500/10 pb-2">{selectedBasecategory}</div>
                        <div className="flex justify-around items-center space-x-4 py-4 overflow-x-auto" >
                            <Image 
                                alt="" 
                                width={250}
                                height={400}
                                className="rounded-lg w-auto h-full overflow-hidden flex-shrink-0"
                                src={"/i1.jpg"}
                            />
                            <Image 
                                alt="" 
                                width={250}
                                height={400}
                                className="rounded-lg w-auto h-full overflow-hidden flex-shrink-0"
                                src={"/i1.jpg"}
                            />
                            <Image 
                                alt="" 
                                width={250}
                                height={400}
                                className="rounded-lg w-auto h-full overflow-hidden flex-shrink-0"
                                src={"/i1.jpg"}
                            />
                            <Image 
                                alt="" 
                                width={250}
                                height={400}
                                className="rounded-lg w-auto h-full overflow-hidden flex-shrink-0"
                                src={"/i1.jpg"}
                            />
                        </div>
                        
                 </div>
                 </>
                }
            </div>

    </div>
    }
    </>
  );
};

export default Header;
