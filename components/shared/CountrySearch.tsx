"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { COUNTRIES } from "@/lib/countries"

interface CountrySearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function CountrySearch({
  value,
  onChange,
  placeholder = "Type to search countries...",
}: CountrySearchProps) {
  const [inputValue, setInputValue] = React.useState(value)
  const [showSuggestions, setShowSuggestions] = React.useState(false)
  const [focusedIndex, setFocusedIndex] = React.useState(-1)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const filteredCountries = inputValue.trim() === "" 
    ? COUNTRIES // Show all countries by default
    : COUNTRIES.filter((country) =>
        country.name.toLowerCase().includes(inputValue.toLowerCase())
      )

  const selectedCountry = COUNTRIES.find((c) => c.name === value)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    setShowSuggestions(true)
    setFocusedIndex(-1)
    
    // If exact match found, select it
    const exactMatch = COUNTRIES.find(c => c.name.toLowerCase() === newValue.toLowerCase())
    if (exactMatch) {
      onChange(exactMatch.name)
    } else if (newValue === "") {
      onChange("")
    }
  }

  const handleSelectCountry = (countryName: string) => {
    setInputValue(countryName)
    onChange(countryName)
    setShowSuggestions(false)
    setFocusedIndex(-1)
  }

  const handleClear = () => {
    setInputValue("")
    onChange("")
    setShowSuggestions(false)
    inputRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || filteredCountries.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setFocusedIndex(prev => (prev + 1) % filteredCountries.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusedIndex(prev => prev <= 0 ? filteredCountries.length - 1 : prev - 1)
        break
      case 'Enter':
        e.preventDefault()
        if (focusedIndex >= 0) {
          handleSelectCountry(filteredCountries[focusedIndex].name)
        }
        break
      case 'Escape':
        setShowSuggestions(false)
        setFocusedIndex(-1)
        break
    }
  }

  React.useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {selectedCountry ? (
            <img
              src={`https://flagcdn.com/${selectedCountry.code.toLowerCase()}.svg`}
              alt={selectedCountry.name}
              className="h-5 w-7 object-cover rounded-sm shadow-sm"
            />
          ) : (
            <Search className="h-5 w-5 text-gray-400" />
          )}
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`w-full ${selectedCountry ? 'pl-14' : 'pl-12'} pr-12 py-3 
                     bg-white border-2 border-gray-200 rounded-xl
                     focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100
                     text-gray-700 placeholder-gray-400
                     transition-all duration-200 ease-in-out
                     shadow-sm hover:shadow-md focus:shadow-lg
                     text-base font-medium`}
        />
        
        {inputValue && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && filteredCountries.length > 0 && (
        <div className={`absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden ${filteredCountries.length <= 3 ? 'h-auto' : 'h-72'}`}>
          <div className={`${filteredCountries.length <= 3 ? '' : 'h-72 overflow-y-auto'}`}>
            {filteredCountries.map((country, index) => {
              // Highlight matched substring
              const matchIndex = country.name.toLowerCase().indexOf(inputValue.toLowerCase());
              let before = country.name;
              let match = '';
              let after = '';
              if (inputValue && matchIndex !== -1) {
                before = country.name.slice(0, matchIndex);
                match = country.name.slice(matchIndex, matchIndex + inputValue.length);
                after = country.name.slice(matchIndex + inputValue.length);
              }
              return (
                <button
                  key={country.code}
                  onClick={() => handleSelectCountry(country.name)}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 
                             hover:bg-emerald-50 transition-colors duration-150
                             ${index === focusedIndex ? 'bg-emerald-50' : ''}
                             ${index !== filteredCountries.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <img
                    src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                    alt={country.name}
                    className="h-4 w-6 object-cover rounded-sm shadow-sm flex-shrink-0"
                  />
                  <span className="text-gray-700 font-medium">
                    {before}
                    {match && <span className=" text-emerald-600 font-bold rounded">{match}</span>}
                    {after}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  )
}