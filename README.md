<p align="center">
<img width="400px" src="docs/src/assets/logo.png"/>
</p>

[![Build Status](https://github.com/YaozhenghangMa/MatterEnv.jl/actions/workflows/CI.yml/badge.svg?branch=)](https://github.com/YaozhenghangMa/MatterEnv.jl/actions/workflows/CI.yml?query=branch%3A)
[![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://YaozhenghangMa.github.io/MatterEnv.jl/stable)
![License](https://img.shields.io/github/license/yaozhenghangma/MatterEnv.jl)
[![Coverage](https://codecov.io/gh/YaozhenghangMa/MatterEnv.jl/branch/main/graph/badge.svg)](https://codecov.io/gh/YaozhenghangMa/MatterEnv.jl)

MatterEnv is an atomic environment package embedded in [Julia](https://julialang.org/). It defines basic type to describe atomic environment and provides
postprocessing tools for DFT calculation.

```julia
import Pkg; Pkg.add("MatterEnv")
```

## Features

- Plot band structure and projected band structure
- Generate and plot electronic density of states (DOS) and projected DOS
- VASP file I/O