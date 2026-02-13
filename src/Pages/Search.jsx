import Banner from '@/Components/Main/Banner'
import Footer from '@/Components/Main/Footer'
import React from 'react'
import { FaChevronLeft, FaChevronRight, FaSearch, FaStar } from 'react-icons/fa'

function Search() {
  return (
    <div>
        <div className="search-page w-full min-h-screen bg-[#141414] px-4 pt-10 md:px-8 lg:px-12  xl:px-20  md:py-12  lg:py-16 ">
    <div className="search-container max-w-[1400px] mx-auto">
        
        {/* Search Header */}
        <div className="search-header mb-8 md:mb-10 pt-14 lg:mb-12">
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
                Search
            </h1>
            
            {/* Search Bar */}
            <div className="search-bar-wrapper relative">
                <input
                    type="text"
                    placeholder="Search for movies, shows, actors..."
                    className="w-full px-5 md:px-6 py-4 md:py-5 pl-14 md:pl-16 bg-[#1a1a1a] border-2 border-[#262626] rounded-xl text-white text-sm md:text-base placeholder:text-[#666] focus:outline-none focus:border-[#e50000] transition-colors"
                />
                <FaSearch className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-[#666] text-lg md:text-xl" />
            </div>
        </div>

        {/* Filters and Results */}
        <div className="content-wrapper flex flex-col lg:flex-row gap-6 md:gap-8">
            
            {/* Left Sidebar - Filters */}
            <div className="filters-sidebar w-full lg:w-[280px] xl:w-[320px] flex-shrink-0">
                <div className="filters-container bg-[#1a1a1a] border border-[#262626] rounded-xl p-5 md:p-6 sticky top-4">
                    
                    <h2 className="text-white text-lg md:text-xl font-bold mb-5 md:mb-6">Filters</h2>
                    
                    {/* Type Filter */}
                    <div className="filter-group mb-6">
                        <h3 className="text-white text-base font-semibold mb-3">Type</h3>
                        <div className="flex flex-col gap-2.5">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-[#e50000] cursor-pointer" />
                                <span className="text-[#cccccc] text-sm md:text-base">Movies</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-[#e50000] cursor-pointer" />
                                <span className="text-[#cccccc] text-sm md:text-base">TV Shows</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-[#e50000] cursor-pointer" />
                                <span className="text-[#cccccc] text-sm md:text-base">Actors</span>
                            </label>
                        </div>
                    </div>

                    {/* Genre Filter */}
                    <div className="filter-group mb-6">
                        <h3 className="text-white text-base font-semibold mb-3">Genre</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Action", "Drama", "Comedy", "Horror", "Sci-Fi", "Romance", "Thriller", "Documentary"].map((genre) => (
                                <button
                                    key={genre}
                                    className="px-3 py-1.5 bg-[#0f0f0f] hover:bg-[#e50000] border border-[#333] rounded-lg text-white text-xs md:text-sm transition-colors"
                                >
                                    {genre}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Year Range */}
                    <div className="filter-group mb-6">
                        <h3 className="text-white text-base font-semibold mb-3">Release Year</h3>
                        <div className="flex gap-3 w-full">
                            <input
                                type="number"
                                placeholder="From"
                                className="flex-1 w-full px-3 py-2 bg-[#0f0f0f] border border-[#333] rounded-lg text-white text-sm focus:outline-none focus:border-[#e50000]"
                            />
                            <input
                                type="number"
                                placeholder="To"
                                className="flex-1 w-full px-3 py-2 bg-[#0f0f0f] border border-[#333] rounded-lg text-white text-sm focus:outline-none focus:border-[#e50000]"
                            />
                        </div>
                    </div>

                    {/* Rating Filter */}
                    <div className="filter-group mb-6">
                        <h3 className="text-white text-base font-semibold mb-3">Rating</h3>
                        <div className="flex flex-col gap-2.5">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" name="rating" className="w-4 h-4 accent-[#e50000] cursor-pointer" />
                                <div className="flex items-center gap-1">
                                    {[1,2,3,4,5].map((star) => (
                                        <FaStar key={star} className="text-[#ffc107] text-sm" />
                                    ))}
                                </div>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" name="rating" className="w-4 h-4 accent-[#e50000] cursor-pointer" />
                                <div className="flex items-center gap-1">
                                    {[1,2,3,4].map((star) => (
                                        <FaStar key={star} className="text-[#ffc107] text-sm" />
                                    ))}
                                    <span className="text-[#666] text-sm">& up</span>
                                </div>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" name="rating" className="w-4 h-4 accent-[#e50000] cursor-pointer" />
                                <div className="flex items-center gap-1">
                                    {[1,2,3].map((star) => (
                                        <FaStar key={star} className="text-[#ffc107] text-sm" />
                                    ))}
                                    <span className="text-[#666] text-sm">& up</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Apply & Clear Buttons */}
                    <div className="filter-actions flex flex-col gap-3">
                        <button className="w-full px-5 py-3 bg-[#e50000] hover:bg-[#c50000] text-white text-sm md:text-base font-semibold rounded-lg transition-colors">
                            Apply Filters
                        </button>
                        <button className="w-full px-5 py-3 bg-[#0f0f0f] hover:bg-[#1f1f1f] border border-[#333] text-white text-sm md:text-base font-medium rounded-lg transition-colors">
                            Clear All
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Side - Search Results */}
            <div className="search-results flex-1">
                
                {/* Results Header */}
                <div className="results-header flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
                    <div>
                        <h2 className="text-white text-xl md:text-2xl font-bold mb-1">
                            Search Results
                        </h2>
                        <p className="text-[#999] text-sm md:text-base">
                            Found 245 results
                        </p>
                    </div>
                    
                    {/* Sort Dropdown */}
                    <select className="px-4 py-2.5 bg-[#1a1a1a] border border-[#333] rounded-lg text-white text-sm md:text-base focus:outline-none focus:border-[#e50000] cursor-pointer">
                        <option>Sort by: Relevance</option>
                        <option>Sort by: Rating</option>
                        <option>Sort by: Year</option>
                        <option>Sort by: Title (A-Z)</option>
                    </select>
                </div>

                {/* Results Grid */}
                <div className="results-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((item) => (
                        <div key={item} className="result-card group cursor-pointer">
                            <div className="poster-wrapper relative w-full aspect-[2/3] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-lg overflow-hidden border border-[#262626] group-hover:border-[#e50000] transition-all duration-300 mb-3">
                                {/* Movie poster */}
                                <div className="w-full h-full flex items-center justify-center text-[#666] text-sm">
                                    Poster
                                </div>
                                
                                {/* Rating Badge */}
                                <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 backdrop-blur-sm rounded-md flex items-center gap-1">
                                    <FaStar className="text-[#ffc107] text-xs" />
                                    <span className="text-white text-xs font-semibold">8.5</span>
                                </div>
                            </div>
                            
                            <h3 className="text-white text-sm md:text-base font-medium line-clamp-2 mb-1 group-hover:text-[#e50000] transition-colors">
                                The Shawshank Redemption
                            </h3>
                            <p className="text-[#666] text-xs md:text-sm">1994 • Drama</p>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination flex items-center justify-center gap-2 mt-10 md:mt-12">
                    <button className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] hover:bg-[#262626] border border-[#333] rounded-lg transition-colors">
                        <FaChevronLeft className="text-white text-sm" />
                    </button>
                    
                    <button className="w-10 h-10 flex items-center justify-center bg-[#e50000] text-white font-semibold rounded-lg">
                        1
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] hover:bg-[#262626] text-white rounded-lg transition-colors">
                        2
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] hover:bg-[#262626] text-white rounded-lg transition-colors">
                        3
                    </button>
                    <span className="text-[#666] px-2">...</span>
                    <button className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] hover:bg-[#262626] text-white rounded-lg transition-colors">
                        10
                    </button>
                    
                    <button className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] hover:bg-[#262626] border border-[#333] rounded-lg transition-colors">
                        <FaChevronRight className="text-white text-sm" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<Banner/>
<Footer/>
    </div>
    
  )
}

export default Search