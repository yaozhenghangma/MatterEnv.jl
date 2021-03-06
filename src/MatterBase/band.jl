#   Copyright (C) 2022  Yaozhenghang Ma
#
#   This program is free software: you can redistribute it and/or modify
#   it under the terms of the GNU General Public License as published by
#   the Free Software Foundation, either version 3 of the License, or
#   (at your option) any later version.
#
#   This program is distributed in the hope that it will be useful,
#   but WITHOUT ANY WARRANTY; without even the implied warranty of
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#   GNU General Public License for more details.
#
#   You should have received a copy of the GNU General Public License
#   along with this program.  If not, see <https://www.gnu.org/licenses/>.

abstract type AbstractBand end
abstract type AbstractBands end


"""
    Band <: AbstractBand

Data type for band structure.

# Fields
- `occupancy::Real`: stores the occupancy of the band
- `energy::Array{<:Real, 1}`: stores the energy values at each k-points
"""
mutable struct Band <: AbstractBand
    occupancy::Real
    energy::Array{<:Real, 1}
end

Band() = Band(0.0, Array{Float64, 1}([]))
Band(number_kpoints::Int) = Band(0.0, zeros(number_kpoints))


"""
    Bands <: AbstractBands

Data type for band structure.

# Fields
- `bands::Array{Band, 1}`: store all bands
"""
mutable struct Bands <: AbstractBands
    bands::Array{Band, 1}
end

Bands() = Bands(Array{Band, 1}([]))
Bands(number_bands::Integer) = Bands([Band() for i in 1:number_bands])
Bands(number_bands::Integer, number_kpoints::Integer) =
    Bands([Band(number_kpoints) for i in 1:number_bands])

Base.getindex(bands::Bands, i) = bands.bands[i]
Base.setindex!(bands::Bands, band::Band, i) = (bands.bands[i] = band)
Base.iterate(bands::Bands, state=1) =
    state > length(bands.bands) ? nothing : (bands[state], state+1)
Base.length(bands::Bands) = length(bands.bands)


"""
    BandsWitSpin <: AbstractBands

Data type for band structure.

# Fields
- `bands_up::Array{Band, 1}`: store all bands for spin up
- `bands_down::Array{Band, 1}`: store all bands for spin down
"""
mutable struct BandsWithSpin <: AbstractBands
    bands_up::Bands
    bands_down::Bands
end

BandsWithSpin() = BandsWithSpin(Bands(), Bands())
BandsWithSpin(number_bands::Integer) =
    BandsWithSpin(Bands(number_bands), Bands(number_bands))
BandsWithSpin(number_bands::Integer, number_kpoints::Integer) =
    BandsWithSpin(Bands(number_bands, number_kpoints),
        Bands(number_bands, number_kpoints))

Base.getindex(bands::BandsWithSpin, i) = (bands.bands_up[i], bands.bands_down[i])
