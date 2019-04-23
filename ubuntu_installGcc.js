#!/usr/bin/jjs -scripting

// development_tools="""
// maven - Java software project management and comprehension tool
// libc6-i386 - 組込用 GNU C ライブラリ: AMD64 用 32 ビット共有ライブラリ
// gcc - GNU C コンパイラ
// gfortran - GNU Fortran 95 コンパイラ
// g++ - GNU C++ コンパイラ
// libc6-dev-amd64 - Embedded GNU C Library: 64bit Development Libraries for AMD64
// libpng3 - PNG ライブラリ - ランタイム
// netpbm - グラフィックの画像フォーマット間変換ツール
// libnetpbm10 - グラフィック変換ツールの共有ライブラリ
// libnetpbm10-dev - グラフィック変換ツールの開発用ライブラリおよびヘッダファイル
// flex - 高速な字句解析器生成プログラム
// perl-doc - Perl ドキュメント
// tcl-dev - Tool Command Language (default version) - development files
// tk-dev - Toolkit for Tcl and X11 (default version) - development files
// xorg-dev - X.Org X Window System development libraries
// bison - YACC 互換なパーサジェネレータ
// cmake - cross-platform, open-source make system
// libwww-mechanize-perl - module to automate interaction with websites
// libjson-perl - module for manipulating JSON-formatted data
// libset-intspan-perl - module to manage sets of integers
// libset-scalar-perl - Perl interface for operations on finite sets
// """


var packages=[
	"build-essentials",
	"gcc",
	"gfortran",
	"g++",
	"cmake"
]

packages.forEach((element) => `sudo apt install -y $element`)

