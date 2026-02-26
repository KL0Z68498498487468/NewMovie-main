import Banner from '@/Components/Main/Banner'
import Footer from '@/Components/Main/Footer'
import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaSearch, FaStar, FaSpinner, FaPlay } from 'react-icons/fa'
import Api_Service from '@/service/Api.Service'
import { Link } from 'react-router-dom'

function Search() {
    const [searchQuery, setSearchQuery] = useState('')
    const [results, setResults] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [activeType, setActiveType] = useState('all')
    const [selectedGenres, setSelectedGenres] = useState([])
    const [yearFrom, setYearFrom] = useState('')
    const [yearTo, setYearTo] = useState('')
    const [selectedRating, setSelectedRating] = useState(null)
    const [sortBy, setSortBy] = useState('popularity.desc')

    // Правильные жанры с ID
    const genres = [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Sci-Fi" },
        { id: 10770, name: "TV Movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" }
    ]

    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])

    const searchMovies = async (pageNum = 1) => {
        setLoading(true)
        try {
            let data = []
            let total = 0
            
            if (searchQuery.trim()) {
                // Multi search когда есть поисковый запрос
                const response = await Api_Service.getData(`/search/multi?query=${encodeURIComponent(searchQuery)}&page=${pageNum}`)
                data = response.results || []
                total = response.total_results || 0
                
                // Фильтруем по типу если выбран
                if (activeType !== 'all') {
                    data = data.filter(item => {
                        if (activeType === 'movie') return item.media_type === 'movie'
                        if (activeType === 'tv') return item.media_type === 'tv'
                        return true
                    })
                }
            } else {
                // Discover когда используем только фильтры
                const endpoint = activeType === 'tv' ? '/discover/tv' : '/discover/movie'
                const params = new URLSearchParams({
                    page: pageNum,
                    sort_by: sortBy,
                })
                
                // Добавляем фильтры
                if (selectedRating !== null) {
                    params.append('vote_average.gte', selectedRating)
                }
                
                if (yearFrom) {
                    params.append(activeType === 'tv' ? 'first_air_date.gte' : 'primary_release_date.gte', `${yearFrom}-01-01`)
                }
                
                if (yearTo) {
                    params.append(activeType === 'tv' ? 'first_air_date.lte' : 'primary_release_date.lte', `${yearTo}-12-31`)
                }
                
                if (selectedGenres.length > 0) {
                    params.append('with_genres', selectedGenres.join(','))
                }
                
                const response = await Api_Service.getData(`${endpoint}?${params}`)
                data = response.results || []
                total = response.total_results || 0
            }
            
            setResults(data)
            setTotalResults(total)
            setCurrentPage(pageNum)
        } catch (error) {
            console.error('Search error:', error)
            setResults([])
            setTotalResults(0)
        } finally {
            setLoading(false)
        }
    }

    const handleSearch = () => {
        setCurrentPage(1)
        searchMovies(1)
    }

    const handleApplyFilters = () => {
        setCurrentPage(1)
        searchMovies(1)
    }

    const handleClearAll = () => {
        setSearchQuery('')
        setActiveType('all')
        setSelectedGenres([])
        setYearFrom('')
        setYearTo('')
        setSelectedRating(null)
        setSortBy('popularity.desc')
        setResults([])
        setTotalResults(0)
        setCurrentPage(1)
    }

    const toggleGenre = (genreId) => {
        setSelectedGenres(prev =>
            prev.includes(genreId)
                ? prev.filter(g => g !== genreId)
                : [...prev, genreId]
        )
    }

    // Auto-search при вводе (debounce)
    useEffect(() => {
        if (searchQuery.trim()) {
            const timer = setTimeout(() => {
                setCurrentPage(1)
                searchMovies(1)
            }, 500)
            return () => clearTimeout(timer)
        }
    }, [searchQuery])

    const totalPages = Math.ceil(totalResults / 20)

    return (
        <div>
            <div className="search-page w-full min-h-screen bg-[#141414] px-4 pt-10 md:px-8 lg:px-12 xl:px-20 md:py-12 lg:py-16 relative overflow-hidden">
                
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-[#e50000]/10 rounded-full blur-[100px] animate-float"></div>
                    <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#e50000]/5 rounded-full blur-[120px] animate-float-delayed"></div>
                </div>

                <div className="search-container max-w-[1400px] mx-auto relative z-10">
                    
                    {/* Search Header */}
                    <div className="search-header mb-8 md:mb-10 pt-14 lg:mb-12 animate-fade-in">
                        <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className="w-1 h-12 bg-gradient-to-b from-[#e50000] to-transparent rounded-full"></div>
                            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                                Search & Discover
                            </h1>
                        </div>
                        
                        {/* Search Bar */}
                        <div className="search-bar-wrapper relative group">
                            <input
                                type="text"
                                placeholder="Search for movies, shows, actors..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                className="w-full px-5 md:px-6 py-4 md:py-5 pl-14 md:pl-16 bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#262626] rounded-xl text-white text-sm md:text-base placeholder:text-[#666] focus:outline-none focus:border-[#e50000] transition-all duration-300 group-hover:border-[#e50000]/50"
                            />
                            <FaSearch 
                                className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-[#666] text-lg md:text-xl cursor-pointer hover:text-[#e50000] transition-colors" 
                                onClick={handleSearch} 
                            />
                            
                            {/* Search glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#e50000]/0 via-[#e50000]/5 to-[#e50000]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Filters and Results */}
                    <div className="content-wrapper flex flex-col lg:flex-row gap-6 md:gap-8">
                        
                        {/* Left Sidebar - Filters */}
                        <div className="filters-sidebar w-full lg:w-[280px] xl:w-[320px] flex-shrink-0 animate-slide-in-left">
                            <div className="filters-container bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#262626] rounded-2xl p-5 md:p-6 sticky top-4 shadow-lg">
                                
                                <div className="flex items-center gap-3 mb-5 md:mb-6">
                                    <div className="w-10 h-10 bg-[#e50000]/20 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">🎯</span>
                                    </div>
                                    <h2 className="text-white text-lg md:text-xl font-bold">Filters</h2>
                                </div>
                                
                                {/* Type Filter */}
                                <div className="filter-group mb-6">
                                    <h3 className="text-white text-base font-semibold mb-3 flex items-center gap-2">
                                        <span className="text-sm">📺</span> Type
                                    </h3>
                                    <div className="flex flex-col gap-2.5">
                                        {[
                                            { value: 'all', label: 'All' },
                                            { value: 'movie', label: 'Movies' },
                                            { value: 'tv', label: 'TV Shows' }
                                        ].map((type) => (
                                            <label key={type.value} className="flex items-center gap-3 cursor-pointer group">
                                                <div className="relative">
                                                    <input 
                                                        type="radio" 
                                                        name="type"
                                                        className="w-4 h-4 accent-[#e50000] cursor-pointer"
                                                        checked={activeType === type.value}
                                                        onChange={() => setActiveType(type.value)}
                                                    />
                                                </div>
                                                <span className="text-[#cccccc] text-sm md:text-base group-hover:text-white transition-colors">
                                                    {type.label}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Genre Filter */}
                                <div className="filter-group mb-6">
                                    <h3 className="text-white text-base font-semibold mb-3 flex items-center gap-2">
                                        <span className="text-sm">🎬</span> Genre
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {genres.map((genre) => (
                                            <button
                                                key={genre.id}
                                                onClick={() => toggleGenre(genre.id)}
                                                className={`px-3 py-1.5 rounded-lg text-white text-xs md:text-sm transition-all duration-300 ${
                                                    selectedGenres.includes(genre.id)
                                                        ? 'bg-[#e50000] border-2 border-[#e50000] scale-105 shadow-lg shadow-[#e50000]/50'
                                                        : 'bg-[#0f0f0f] hover:bg-[#e50000]/20 border-2 border-[#333] hover:border-[#e50000]/50'
                                                }`}
                                            >
                                                {genre.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Year Range */}
                                <div className="filter-group mb-6">
                                    <h3 className="text-white text-base font-semibold mb-3 flex items-center gap-2">
                                        <span className="text-sm">📅</span> Release Year
                                    </h3>
                                    <div className="flex gap-3">
                                        <input
                                            type="number"
                                            placeholder="From"
                                            value={yearFrom}
                                            onChange={(e) => setYearFrom(e.target.value)}
                                            className="flex-1 w-full px-3 md:px-4 py-3 md:py-3.5 bg-[#0f0f0f] border-2 border-[#333] rounded-lg text-white text-sm md:text-base placeholder:text-[#666] focus:outline-none focus:border-[#e50000] transition-colors"
                                        />
                                        <input
                                            type="number"
                                            placeholder="To"
                                            value={yearTo}
                                            onChange={(e) => setYearTo(e.target.value)}
                                            className="flex-1  w-full px-3 md:px-4 py-3 md:py-3.5 bg-[#0f0f0f] border-2 border-[#333] rounded-lg text-white text-sm md:text-base placeholder:text-[#666] focus:outline-none focus:border-[#e50000] transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Rating Filter */}
                                <div className="filter-group mb-6">
                                    <h3 className="text-white text-base font-semibold mb-3 flex items-center gap-2">
                                        <span className="text-sm">⭐</span> Minimum Rating
                                    </h3>
                                    <div className="flex flex-col gap-2.5">
                                        {[
                                            { value: null, label: 'All ratings', stars: null },
                                            { value: 9, label: '9+', stars: 5 },
                                            { value: 8, label: '8+ & up', stars: 4 },
                                            { value: 7, label: '7+ & up', stars: 3 }
                                        ].map((rating) => (
                                            <label key={rating.value || 'all'} className="flex items-center gap-3 cursor-pointer group">
                                                <input 
                                                    type="radio" 
                                                    name="rating" 
                                                    className="w-4 h-4 accent-[#e50000] cursor-pointer"
                                                    checked={selectedRating === rating.value}
                                                    onChange={() => setSelectedRating(rating.value)}
                                                />
                                                <div className="flex items-center gap-2">
                                                    {rating.stars && (
                                                        <div className="flex gap-0.5">
                                                            {[...Array(rating.stars)].map((_, i) => (
                                                                <FaStar key={i} className="text-[#ffc107] text-xs" />
                                                            ))}
                                                        </div>
                                                    )}
                                                    <span className="text-[#cccccc] text-sm group-hover:text-white transition-colors">
                                                        {rating.label}
                                                    </span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Apply & Clear Buttons */}
                                <div className="filter-actions flex flex-col gap-3">
                                    <button 
                                        onClick={handleApplyFilters}
                                        className="group relative w-full px-5 py-3 bg-gradient-to-r from-[#e50000] to-[#c50000] hover:from-[#ff0000] hover:to-[#e50000] text-white text-sm md:text-base font-semibold rounded-lg transition-all duration-300 overflow-hidden hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#e50000]/50"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                        <span className="relative">Apply Filters</span>
                                    </button>
                                    <button 
                                        onClick={handleClearAll}
                                        className="w-full px-5 py-3 bg-[#0f0f0f] hover:bg-[#1f1f1f] border-2 border-[#333] hover:border-[#e50000] text-white text-sm md:text-base font-medium rounded-lg transition-all duration-300"
                                    >
                                        Clear All
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Search Results */}
                        <div className="search-results flex-1 animate-fade-in-up">
                            
                            {/* Results Header */}
                            <div className="results-header flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8 bg-gradient-to-r from-[#1a1a1a]/50 to-transparent p-4 md:p-5 rounded-xl border border-[#262626]">
                                <div>
                                    <h2 className="text-white text-xl md:text-2xl font-bold mb-1 flex items-center gap-2">
                                        <span className="text-2xl">🎯</span> Search Results
                                    </h2>
                                    <p className="text-[#999] text-sm md:text-base">
                                        Found <span className="text-[#e50000] font-bold">{totalResults.toLocaleString()}</span> results
                                    </p>
                                </div>
                                
                                {/* Sort Dropdown */}
                                <select 
                                    value={sortBy}
                                    onChange={(e) => {
                                        setSortBy(e.target.value)
                                        handleApplyFilters()
                                    }}
                                    className="px-4 py-2.5 bg-[#1a1a1a] border-2 border-[#333] hover:border-[#e50000] rounded-lg text-white text-sm md:text-base focus:outline-none focus:border-[#e50000] cursor-pointer transition-colors"
                                >
                                    <option value="popularity.desc">🔥 Most Popular</option>
                                    <option value="vote_average.desc">⭐ Highest Rated</option>
                                    <option value="vote_average.asc">📉 Lowest Rated</option>
                                    <option value="release_date.desc">🆕 Newest First</option>
                                    <option value="release_date.asc">📜 Oldest First</option>
                                </select>
                            </div>

                            {/* Loading State */}
                            {loading && (
                                <div className="flex flex-col justify-center items-center py-20 animate-fade-in">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-[#e50000] rounded-full animate-ping opacity-20"></div>
                                        <FaSpinner className="relative text-[#e50000] text-5xl animate-spin" />
                                    </div>
                                    <p className="text-white mt-6 text-lg">Searching...</p>
                                </div>
                            )}

                            {/* Results Grid */}
                            {!loading && results.length > 0 ? (
                                <div className="results-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
                                    {results.map((item, index) => {
                                        const imageUrl = item.poster_path 
                                            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                                            : item.profile_path 
                                            ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                                            : null
                                        
                                        const title = item.title || item.name || 'Unknown'
                                        const year = item.release_date?.split('-')[0] || item.first_air_date?.split('-')[0] || 'N/A'
                                        const type = item.media_type === 'person' ? 'Actor' : item.media_type === 'movie' ? 'Movie' : 'TV Show'
                                        const rating = item.vote_average?.toFixed(1) || null
                                        const detailUrl = item.media_type === 'person' 
                                            ? `/actor/${item.id}`
                                            : `/movie_inside/${item.id}`

                                        return (
                                            <div 
                                                key={`${item.media_type}-${item.id}`} 
                                                className="result-card group cursor-pointer animate-fade-in-up"
                                                style={{ animationDelay: `${index * 50}ms` }}
                                            >
                                                <Link to={detailUrl}>
                                                    <div className="poster-wrapper relative w-full aspect-[2/3] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl overflow-hidden border-2 border-[#262626] group-hover:border-[#e50000] transition-all duration-500 mb-3 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#e50000]/30">
                                                        {/* Movie poster */}
                                                        {imageUrl ? (
                                                            <>
                                                                <img 
                                                                    src={imageUrl} 
                                                                    alt={title}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                    loading="lazy"
                                                                />
                                                                
                                                                {/* Gradient Overlay */}
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                                
                                                                {/* Play Button */}
                                                                {item.media_type !== 'person' && (
                                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                                        <div className="w-12 h-12 bg-[#e50000] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                                                                            <FaPlay className="text-white ml-0.5" />
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <div className="w-full h-full flex items-center justify-center text-[#666] text-sm">
                                                                No Image
                                                            </div>
                                                        )}
                                                        
                                                        {/* Rating Badge */}
                                                        {rating && (
                                                            <div className="absolute top-2 right-2 px-2 py-1 bg-black/90 backdrop-blur-md rounded-md flex items-center gap-1 shadow-lg transform translate-y-[-50px] group-hover:translate-y-0 transition-transform duration-500">
                                                                <FaStar className="text-[#ffc107] text-xs animate-pulse" />
                                                                <span className="text-white text-xs font-bold">{rating}</span>
                                                            </div>
                                                        )}

                                                        {/* Type Badge */}
                                                        <div className="absolute bottom-2 left-2 px-2 py-1 bg-[#e50000]/90 backdrop-blur-sm rounded-md transform translate-y-[50px] group-hover:translate-y-0 transition-transform duration-500">
                                                            <span className="text-white text-xs font-semibold">{type}</span>
                                                        </div>

                                                        {/* Shine effect */}
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                                    </div>
                                                    
                                                    <h3 className="text-white text-sm md:text-base font-semibold line-clamp-2 mb-1 group-hover:text-[#e50000] transition-colors">
                                                        {title}
                                                    </h3>
                                                    <p className="text-[#666] text-xs md:text-sm">{year}</p>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : !loading && (
                                <div className="text-center py-20 animate-fade-in">
                                    <div className="text-8xl mb-6">🔍</div>
                                    <p className="text-[#666] text-lg mb-2">
                                        {searchQuery === '' && activeType === 'all' 
                                            ? 'Start searching or use filters to find movies and shows'
                                            : 'No results found'}
                                    </p>
                                    <p className="text-[#444] text-sm">
                                        Try different search terms or adjust your filters
                                    </p>
                                </div>
                            )}

                            {/* Pagination */}
                            {!loading && results.length > 0 && totalPages > 1 && (
                                <div className="pagination flex items-center justify-center gap-2 mt-10 md:mt-12 animate-fade-in">
                                    <button 
                                        onClick={() => searchMovies(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] hover:bg-[#e50000] border-2 border-[#333] hover:border-[#e50000] rounded-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#1a1a1a] disabled:hover:border-[#333] group"
                                    >
                                        <FaChevronLeft className="text-white text-sm group-hover:scale-125 transition-transform" />
                                    </button>
                                    
                                    {currentPage > 2 && (
                                        <>
                                            <button 
                                                onClick={() => searchMovies(1)}
                                                className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] hover:bg-[#262626] text-white rounded-lg transition-all duration-300 hover:scale-110"
                                            >
                                                1
                                            </button>
                                            {currentPage > 3 && <span className="text-[#666] px-2">...</span>}
                                        </>
                                    )}
                                    
                                    {currentPage > 1 && (
                                        <button 
                                            onClick={() => searchMovies(currentPage - 1)}
                                            className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] hover:bg-[#262626] text-white rounded-lg transition-all duration-300 hover:scale-110"
                                        >
                                            {currentPage - 1}
                                        </button>
                                    )}
                                    
                                    <button className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#e50000] to-[#c50000] text-white font-bold rounded-lg shadow-lg shadow-[#e50000]/50 scale-110">
                                        {currentPage}
                                    </button>
                                    
                                    {currentPage < totalPages && (
                                        <button 
                                            onClick={() => searchMovies(currentPage + 1)}
                                            className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] hover:bg-[#262626] text-white rounded-lg transition-all duration-300 hover:scale-110"
                                        >
                                            {currentPage + 1}
                                        </button>
                                    )}
                                    
                                    {currentPage < totalPages - 1 && (
                                        <>
                                            {currentPage < totalPages - 2 && <span className="text-[#666] px-2">...</span>}
                                            <button 
                                                onClick={() => searchMovies(totalPages)}
                                                className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] hover:bg-[#262626] text-white rounded-lg transition-all duration-300 hover:scale-110"
                                            >
                                                {totalPages}
                                            </button>
                                        </>
                                    )}
                                    
                                    <button 
                                        onClick={() => searchMovies(currentPage + 1)}
                                        disabled={currentPage >= totalPages}
                                        className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] hover:bg-[#e50000] border-2 border-[#333] hover:border-[#e50000] rounded-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#1a1a1a] disabled:hover:border-[#333] group"
                                    >
                                        <FaChevronRight className="text-white text-sm group-hover:scale-125 transition-transform" />
                                    </button>
                                </div>
                            )}
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