var documenterSearchIndex = {"docs":
[{"location":"reference/Toolkit/#ToolkitAPI","page":"Toolkit","title":"Toolkit","text":"","category":"section"},{"location":"reference/Toolkit/#Smearing-Function","page":"Toolkit","title":"Smearing Function","text":"","category":"section"},{"location":"reference/Toolkit/","page":"Toolkit","title":"Toolkit","text":"gaussian\nlorentzian","category":"page"},{"location":"reference/Toolkit/#MatterEnv.gaussian","page":"Toolkit","title":"MatterEnv.gaussian","text":"gaussian(x::Real, x₀::Real; σ::Real = 0.05)\n\nPDF of Gaussian distribution: g(x x_0 sigma)=frac1sigma sqrt2 pi     exp left(-frac12frac(x-x_0)^2sigma^2right).\n\n\n\n\n\n","category":"function"},{"location":"reference/Toolkit/#MatterEnv.lorentzian","page":"Toolkit","title":"MatterEnv.lorentzian","text":"lorentzian(x::Real, x₀::Real; γ::Real = 0.03)\n\nPDF of Cauchy-Lorentz distribution: fleft(x x_0 gammaright) =frac1pi gamma     leftfracgamma^2left(x-x_0right)^2+gamma^2right\n\n\n\n\n\n","category":"function"},{"location":"reference/Toolkit/#Generate-DOS","page":"Toolkit","title":"Generate DOS","text":"","category":"section"},{"location":"reference/Toolkit/","page":"Toolkit","title":"Toolkit","text":"generate_dos\ngenerate_pdos","category":"page"},{"location":"reference/Toolkit/#MatterEnv.generate_dos","page":"Toolkit","title":"MatterEnv.generate_dos","text":"generate_dos(bands::Bands, kpoints::Array{KPoint, 1};\n    smear::Function=gaussian, energy_number::Integer=10000)\n\nGenerate electronic density of states using bands and kpoints.\n\nArguments\n\nbands::Bands: metadata of bands\nkpoints::Array{KPoint, 1}: metadata of k-points\nsmear::Function=gaussian: smearing function, default: Gaussian smear\nenergy_number::Integer=10000: number of energy points, default 10000\n\nReturns\n\ndos::DOS: metadata of dos\n\n\n\n\n\ngenerate_dos(bands::BandsWithSpin, kpoints::Array{KPoint, 1};\n    smear::Function=gaussian, energy_number::Integer=10000)\n\nGenerate electronic density of states using bands and kpoints.\n\nArguments\n\nbands::BandsWithSpin: metadata of bands\nkpoints::Array{KPoint, 1}: metadata of k-points\nsmear::Function=gaussian: smearing function, default: Gaussian smear\nenergy_number::Integer=10000: number of energy points, default 10000\n\nReturns\n\ndos1::DOS: metadata of dos of spin up\ndos2::DOS: metadata of dos of spin down\n\n\n\n\n\n","category":"function"},{"location":"reference/Toolkit/#MatterEnv.generate_pdos","page":"Toolkit","title":"MatterEnv.generate_pdos","text":"generate_pdos(bands::Bands, kpoints::Array{KPoint, 1},\n    projection::Projection;\n    smear::Function=gaussian, energy_number::Integer=10000,\n    ions::Array{Integer, 1}=nothing, orbits::Array{Integer, 1}=nothing)\n\nGenerate projected electronic density of states using bands and kpoints.\n\nArguments\n\nbands::Bands: metadata of bands\nkpoints::Array{KPoint, 1}: metadata of k-points\nprojection::Projection: metadata of projection\nsmear::Function=gaussian: smearing function, default: Gaussian smear\nenergy_number::Integer=10000: number of energy points, default 10000\nions::Array{<:Integer, 1}=nothing: index of ions which wavefunction is projected to\norbits::Array{<:Integer, 1}=nothing: index of orbitss which wavefunction is projected to\n\nReturns\n\npdos::DOS: metadata of projected dos\n\n\n\n\n\ngenerate_pdos(bands::Bands, kpoints::Array{KPoint, 1},\n    projection::Projection;\n    smear::Function=gaussian, energy_number::Integer=10000,\n    ions::Array{Integer, 1}=nothing, orbits::Array{Integer, 1}=nothing)\n\nGenerate projected electronic density of states using bands and kpoints.\n\nArguments\n\nbands::BandsWithSpin: metadata of bands\nkpoints::Array{KPoint, 1}: metadata of k-points\nprojection::ProjectionWithSpin: metadata of projection\nsmear::Function=gaussian: smearing function, default: Gaussian smear\nenergy_number::Integer=10000: number of energy points, default 10000\nions::Array{<:Integer, 1}=nothing: index of ions which wavefunction is projected to\norbits::Array{<:Integer, 1}=nothing: index of orbitss which wavefunction is projected to\n\nReturns\n\npdos1::DOS: metadata of projected dos of spin up\npdos2::DOS: metadata of projected dos of spin down\n\n\n\n\n\n","category":"function"},{"location":"reference/Toolkit/#Energy-Shift","page":"Toolkit","title":"Energy Shift","text":"","category":"section"},{"location":"reference/Toolkit/","page":"Toolkit","title":"Toolkit","text":"shift_energy!","category":"page"},{"location":"reference/Toolkit/#MatterEnv.shift_energy!","page":"Toolkit","title":"MatterEnv.shift_energy!","text":"shift_energy!(band::Band, energy::Real)\n\nShift the energy value of band with given energy value.\n\nArguments\n\nband::Band: metadata of band\nenergy::Real: shift value\n\n\n\n\n\nshift_energy!(bands::Bands, energy::Real)\n\nShift the energy value of all bands with given energy value.\n\nArguments\n\nbands::Bands: metadata of band\nenergy::Real: shift value\n\n\n\n\n\nshift_energy!(bands::BandsWithSpin, energy::Real)\n\nShift the energy value of all bands with given energy value.\n\nArguments\n\nbands::BandsWithSpin: metadata of band\nenergy::Real: shift value\n\n\n\n\n\n","category":"function"},{"location":"reference/Toolkit/#Orbit","page":"Toolkit","title":"Orbit","text":"","category":"section"},{"location":"reference/Toolkit/","page":"Toolkit","title":"Toolkit","text":"projection_transformation!","category":"page"},{"location":"reference/Toolkit/#MatterEnv.projection_transformation!","page":"Toolkit","title":"MatterEnv.projection_transformation!","text":"projection_transformation!(projection::Projection,\n    transfer_matrix::Matrix{<:Number}...;\n    orbit::Symbol=:d)\n\nLinear transformation of projection ⟨Yₗₘ|ϕₙₖ⟩.\n\nArguments\n\nprojection::Projection: projection of wavefunction\ntransfer_matrix::Matrix{<:Number}...: transformation matrix M1, M2 ...\norbit::Symbol=:d: orbits to be considered in transformation, default d orbits\n\n\n\n\n\nprojection_transformation!(projection::ProjectionWithSpin,\n    transfer_matrix::Matrix{<:Number}...;\n    orbit::Symbol=:d)\n\nLinear transformation of projection ⟨Yₗₘ|ϕₙₖ⟩.\n\nArguments\n\nprojection::ProjectionWithSpin: projection of wavefunction\ntransfer_matrix::Matrix{<:Number}...: transformation matrix M1, M2 ...\norbit::Symbol=:d: orbits to be considered in transformation, default d orbits\n\n\n\n\n\n","category":"function"},{"location":"reference/Toolkit/#Projection","page":"Toolkit","title":"Projection","text":"","category":"section"},{"location":"reference/Toolkit/","page":"Toolkit","title":"Toolkit","text":"distinguish_spin","category":"page"},{"location":"reference/Toolkit/#MatterEnv.distinguish_spin","page":"Toolkit","title":"MatterEnv.distinguish_spin","text":"distinguish_spin(projection_all::Projection,\n    projection_axis::Projection,\n    bands::Bands)\n\nDistinguish projection of spin up and spin down. (Used in projection loaded from PROCAR)\n\nArguments\n\nprojection_all::Projection: total projected magnetization\nprojection_axis::Projection: projected magnetization in x, y or z axis\nbands::Bands: metadata of bands\n\nReturnss\n\nProjectionWithSpin: projection of spin up and spin down\nBandsWithSpin: metadata of bands of spin up and spin down\n\n\n\n\n\n","category":"function"},{"location":"reference/MatterBase/#MatterBaseAPI","page":"Basic Type","title":"Basic Type","text":"","category":"section"},{"location":"reference/MatterBase/#Cell","page":"Basic Type","title":"Cell","text":"","category":"section"},{"location":"reference/MatterBase/","page":"Basic Type","title":"Basic Type","text":"Atom\nLattice\nCell","category":"page"},{"location":"reference/MatterBase/#MatterEnv.Atom","page":"Basic Type","title":"MatterEnv.Atom","text":"Atom{T <: Real}\n\nData type for single atom.\n\nFields\n\nsymbol::String: stores the chemical symbol of the atom\nposition::Array{T, 1}: stores the Certesian coordinate of the atom\n\n\n\n\n\n","category":"type"},{"location":"reference/MatterBase/#MatterEnv.Lattice","page":"Basic Type","title":"MatterEnv.Lattice","text":"Lattice{T <: Real}\n\nData type of lattice.\n\nFields\n\nlattice::Array{T, 2}: stores 3×3 matrix for the lattice\na:Array{T, 1}: stores basis of axis a\nb:Array{T, 1}: stores basis of axis b\nc:Array{T, 1}: stores basis of axis c\n\n\n\n\n\n","category":"type"},{"location":"reference/MatterBase/#MatterEnv.Cell","page":"Basic Type","title":"MatterEnv.Cell","text":"Cell\n\nData type for cell.\n\nFields\n\nname::String: stores the name of the cell.\nlattice::Lattice{<:Real}: stores metadata about the lattice\natoms::Array{Atom{<:Real}, 1}: stroes metadata of all atoms in the cell\nnumbers::Array{<:Integer, 1}: stroes the numbers of atoms of elements\nsymbols::Array{String, 1}: stores the chemical symbols of atoms of elements\n\n\n\n\n\n","category":"type"},{"location":"reference/MatterBase/#K-point","page":"Basic Type","title":"K-point","text":"","category":"section"},{"location":"reference/MatterBase/","page":"Basic Type","title":"Basic Type","text":"KPoint","category":"page"},{"location":"reference/MatterBase/#MatterEnv.KPoint","page":"Basic Type","title":"MatterEnv.KPoint","text":"KPoint\n\nData type for k-point.\n\nFields\n\nweight::Real: stores the weight of k-point\ncoordinate::Array{<:Real, 1}: stores the coordinate of k-point\n\n\n\n\n\n","category":"type"},{"location":"reference/MatterBase/#Band-Structure","page":"Basic Type","title":"Band Structure","text":"","category":"section"},{"location":"reference/MatterBase/","page":"Basic Type","title":"Basic Type","text":"Band\nBands\nBandsWithSpin","category":"page"},{"location":"reference/MatterBase/#MatterEnv.Band","page":"Basic Type","title":"MatterEnv.Band","text":"Band <: AbstractBand\n\nData type for band structure.\n\nFields\n\noccupancy::Real: stores the occupancy of the band\nenergy::Array{<:Real, 1}: stores the energy values at each k-points\n\n\n\n\n\n","category":"type"},{"location":"reference/MatterBase/#MatterEnv.Bands","page":"Basic Type","title":"MatterEnv.Bands","text":"Bands <: AbstractBands\n\nData type for band structure.\n\nFields\n\nbands::Array{Band, 1}: store all bands\n\n\n\n\n\n","category":"type"},{"location":"reference/MatterBase/#MatterEnv.BandsWithSpin","page":"Basic Type","title":"MatterEnv.BandsWithSpin","text":"BandsWitSpin <: AbstractBands\n\nData type for band structure.\n\nFields\n\nbands_up::Array{Band, 1}: store all bands for spin up\nbands_down::Array{Band, 1}: store all bands for spin down\n\n\n\n\n\n","category":"type"},{"location":"reference/MatterBase/#DOS","page":"Basic Type","title":"DOS","text":"","category":"section"},{"location":"reference/MatterBase/","page":"Basic Type","title":"Basic Type","text":"DOS","category":"page"},{"location":"reference/MatterBase/#MatterEnv.DOS","page":"Basic Type","title":"MatterEnv.DOS","text":"DOS\n\nData type for density of states.\n\nFields\n\nenergy::Array{<:Real, 1}: energy value of each dos point\ndos::Array{<:Real, 1}: metadata of dos\n\n\n\n\n\n","category":"type"},{"location":"reference/MatterBase/#Projection","page":"Basic Type","title":"Projection","text":"","category":"section"},{"location":"reference/MatterBase/","page":"Basic Type","title":"Basic Type","text":"Projection\nProjectionWithSpin","category":"page"},{"location":"reference/MatterBase/#MatterEnv.Projection","page":"Basic Type","title":"MatterEnv.Projection","text":"Projection\n\nData type for projection of wave function.\n\nFields\n\nnumber_kpoints::Integer: stores the number of k-points\nnumber_bands::Integer: stores the number of bands\nnumber_ions::Integer: stores the number of ions\nprojection::Array{<:Complex, 4}: stores the projection ⟨Yₗₘ|ϕₙₖ⟩. The index order is   [kpoint number, band number, ion number, orbit number]\nprojection_square::Array{<:Real, 4}: stores the squared projection |⟨Yₗₘ|ϕₙₖ⟩|². The   index order is same as projection.\n\n\n\n\n\n","category":"type"},{"location":"reference/MatterBase/#MatterEnv.ProjectionWithSpin","page":"Basic Type","title":"MatterEnv.ProjectionWithSpin","text":"Projection\n\nData type for projection of wave function.\n\nFields\n\nprojection_up::Projection: stores the projection of spin up electrons\nprojection_down::Projection: stores the projection of spin down electrons\n\n\n\n\n\n","category":"type"},{"location":"reference/Visualization/#VisualizeAPI","page":"Visualize","title":"Visualize","text":"","category":"section"},{"location":"reference/Visualization/","page":"Visualize","title":"Visualize","text":"plot!","category":"page"},{"location":"reference/Visualization/#MatterEnv.plot!","page":"Visualize","title":"MatterEnv.plot!","text":"plot!(band::Band,\n    kpoints::Array{KPoint, 1},\n    xticks::Array{String, 1} = nothing;\n    line = (:solid, :black))\n\nPlot one band on current figure.\n\nArguments\n\nband::Band: metadata of band\nkpoints::Array{KPoint, 1}: metadata of k-points\nxticks::Array{String, 1}: name of critical points showed at x axis\nline = (:solid, :black): style of line (see document of Plots.jl)\n\n\n\n\n\nplot!(bands::Bands,\n    kpoints::Array{KPoint, 1},\n    xticks::Array{String, 1} = nothing;\n    line = (:solid, :black))\n\nPlot all bands on current figure.\n\nArguments\n\nbands::Bands: metadata of all bands\nkpoints::Array{KPoint, 1}: metadata of k-points\nxticks::Array{String, 1}=nothing: name of critical points showed at x axis\nline = (:solid, :black): style of line (see document of Plots.jl)\n\n\n\n\n\nplot!(bands::BandsWithSpin,\n    kpoints::Array{KPoint, 1},\n    xticks::Array{String, 1} = nothing;\n    line = (:solid, :black))\n\nPlot all bands on current figure.\n\nArguments\n\nbands::BandsWithSpin: metadata of all bands (spin up and spin down)\nkpoints::Array{KPoint, 1}: metadata of k-points\nxticks::Array{String, 1}=nothing: name of critical points showed at x axis\nline = [(:solid, :black),(:dash, :gray)]: style of line (see document of Plots.jl)\n\n\n\n\n\nplot!(dos::DOS; line=(:blue), shift::Real=0, max::Real=1)\n\nPlot dos on current figure.\n\nArguments\n\ndos::DOS: metadata of dos\nline = (:blue): style of line (see document of Plots.jl)\nshift::Real=0: shift of dos value, default 0\nmax::Real=1: maximum value of dos value, default 1\n\n\n\n\n\nplot!(dos::DOS...; line=(:blue), shift::Real=0, max::Real=1)\n\nPlot dos on current figure.\n\nArguments\n\ndos::DOS...: metadata of dos\nline = (:blue): style of line (see document of Plots.jl)\nshift::Real=0: shift of dos value, default 0\nmax::Real=1: maximum value of dos value, default 1\n\n\n\n\n\nplot!(\n    projection::Projection,\n    kpoints::Array{KPoint, 1},\n    bands::Bands;\n    ion::Integer = nothing,\n    orbit::Integer = nothing,\n    color::Symbol = :red,\n    magnify::Real = 10,\n    tolerance::Real = 0)\n\nPlot projections on current figure.\n\nArguments\n\nprojection::Projection: metadata of projection\nkpoints::Array{KPoint, 1}: metadata of all k-points\nbands::Bands: metadat of all bands\nion::Integer = nothing: projection of given ion\norbit::Integer = nothing: projection of given orbit\ncolor::Symbol = :red: marker color\nalpha::Real = 0.5: alpha value of marker\nmagnify::Real = 10: markersize = magnify * projectionsquare\ntolerance::Real = 0: plot point if projection_square > tolerance\n\n\n\n\n\nplot!(\n    projection::ProjectionWithSpin,\n    kpoints::Array{KPoint, 1},\n    bands::BandsWithSpin;\n    ion::Integer = nothing,\n    orbit::Integer = nothing,\n    color::Symbol = :red,\n    magnify::Real = 10,\n    tolerance::Real = 0\n\nPlot projections on current figure.\n\nArguments\n\nprojection::ProjectionWithSpin: metadata of projection\nkpoints::Array{KPoint, 1}: metadata of all k-points\nbands::BandsWithSpin: metadat of all bands\nion::Integer = nothing: projection of given ion\norbit::Integer = nothing: projection of given orbit\ncolor::Symbol = :red: marker color\nalpha::Real = 0.5: alpha value of marker\nmagnify::Real = 10: markersize = magnify * projectionsquare\ntolerance::Real = 0: plot point if projection_square > tolerance\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = MatterEnv","category":"page"},{"location":"#MatterEnv","page":"Home","title":"MatterEnv","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for MatterEnv.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"reference/VASP/#VASPAPI","page":"VASP File","title":"VASP File","text":"","category":"section"},{"location":"reference/VASP/#POSCAR","page":"VASP File","title":"POSCAR","text":"","category":"section"},{"location":"reference/VASP/","page":"VASP File","title":"VASP File","text":"load_poscar\nsave_poscar","category":"page"},{"location":"reference/VASP/#MatterEnv.load_poscar","page":"VASP File","title":"MatterEnv.load_poscar","text":"load_poscar(filename::String=\"POSCAR\") -> Cell\n\nLoad cell structure from POSCAR file.\n\nArguments\n\nfilename::String=\"POSCAR\": name of input file\n\nReturns\n\nCell: structure of cell\n\n\n\n\n\n","category":"function"},{"location":"reference/VASP/#MatterEnv.save_poscar","page":"VASP File","title":"MatterEnv.save_poscar","text":"save_poscar(cell::Cell, filename::String=\"POSCAR\", direct::Bool=true)\n\nSave cell structure into POSCAR file.\n\nArguments\n\ncell::Cell: structure of cell\nfilename::String=\"POSCAR\": name of output file\ndirect::Bool=true: output direct coordinate or Certesian coordinate\n\n\n\n\n\n","category":"function"},{"location":"reference/VASP/#PROCAR","page":"VASP File","title":"PROCAR","text":"","category":"section"},{"location":"reference/VASP/","page":"VASP File","title":"VASP File","text":"load_procar\nsave_procar","category":"page"},{"location":"reference/VASP/#MatterEnv.load_procar","page":"VASP File","title":"MatterEnv.load_procar","text":"load_procar(filename::String=\"PROCAR\"; spin::Bool=false, noncollinear::Bool=false) -> Projection, KPoints, Bands\n\nLoad projection of wave function ⟨Yₗₘ|ϕₙₖ⟩ from PROCAR file.\n\nArguments\n\nfilename::String=\"PROCAR\": name of input file\nspin::Bool=false: ISPIN = 0(false) or 1(true)\nnoncollinear::Bool=false: LNONCOLINEAR = 0(false) or 1(true). For noncolinear=1, value of spin is neglected.\n\nReturns for collinear\n\nProjection: Projection of wave function ⟨Yₗₘ|ϕₙₖ⟩\nArray{KPoint, 1}: metadata of k-points\nBands: metadata of all bands\n\nReturns for noncollinear\n\nProjection: Total projection of wave function ⟨Yₗₘ|ϕₙₖ⟩\nProjection: Projection of spin along x-axis\nProjection: Projection of spin along y-axis\nProjection: Projection of spin along z-axis\nArray{KPoint, 1}: metadata of k-points\nBands: metadata of all bands\n\n\n\n\n\n","category":"function"},{"location":"reference/VASP/#MatterEnv.save_procar","page":"VASP File","title":"MatterEnv.save_procar","text":"save_procar(projection::Projection,\n    kpoints::Array{KPoint, 1},\n    bands::AbstractBands,\n    filename::String=\"PROCAR\";\n    squared_only::Bool=true)\n\nSave projection of wave function ⟨Yₗₘ|ϕₙₖ⟩ into PROCAR file.\n\nArguments\n\nprojection::AbstractProjection: projection of wave function\nkpoints::Array{KPoint, 1}: metadata of k-points\nbands::AbstractBands: metadata of bands\nfilename::String=\"PROCAR\": name of output file\nsquared_only::Bool=true: only output squared projection |⟨Yₗₘ|ϕₙₖ⟩|² or not\n\n\n\n\n\n","category":"function"},{"location":"reference/VASP/#EIVENVAL","page":"VASP File","title":"EIVENVAL","text":"","category":"section"},{"location":"reference/VASP/","page":"VASP File","title":"VASP File","text":"load_eigenval","category":"page"},{"location":"reference/VASP/#MatterEnv.load_eigenval","page":"VASP File","title":"MatterEnv.load_eigenval","text":"load_eigenval(filename::String=\"EIGENVAL\", spin::Bool=false) -> Bands, Kpoints\n\nLoad band structure from EIVENVAL file.\n\nArguments\n\nfilename::String=\"EIGENVAL\": name of input file\nspin::Bool=false: distingush spin up and spin down or not\n\nReturns\n\nBands: Eigen-values of energy in each k-points\nArray{KPoint, 1}: K-points and weight\n\n\n\n\n\n","category":"function"},{"location":"reference/VASP/#PROOUT","page":"VASP File","title":"PROOUT","text":"","category":"section"},{"location":"reference/VASP/","page":"VASP File","title":"VASP File","text":"load_proout","category":"page"},{"location":"reference/VASP/#MatterEnv.load_proout","page":"VASP File","title":"MatterEnv.load_proout","text":"load_proout(filename::String=\"PROOUT\") -> Projection\n\nLoad projection of wave function ⟨Yₗₘ|ϕₙₖ⟩ from PROOUT file.\n\nArguments\n\nfilename::String=\"PROOUT\": name of input file\n\nReturns\n\nProjection: Projection of wave function ⟨Yₗₘ|ϕₙₖ⟩\n\n\n\n\n\n","category":"function"}]
}
