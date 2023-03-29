---
title: "Autonomiczny Dron Śledzący"
excerpt: "Autonomiczny dron śledzący cel i omijający przeszkody - finalista zawodów AUAV Chase Challenge."
coverImage: "/projects/auav/auav_sim.jpg"
ogImage:
  url: "/projects/auav/auav_sim.jpg"
priority: "2"
---

# Autonomiczny Dron Śledzący

Przygotowany przez nas dron potrafi w pełni autonomicznie wykrywać zadany cel (np. pojazd) i podążać za nim omijając jednocześnie przeszkody. Projekt został przygotowany w celu startu w zawodach [AUAV Chase Challenge](https://ri4rover.org/competition.html) organizowanych przez Purdue University w USA. Stworzony system w kolejnych dwóch edycjach (2022 i 2023) został zakwalifikowany do finałów. Zawody polegają na śledzeniu zdalnie sterowanego autka poruszającego się po makiecie miasta. Dron ma za zadanie śledzić autko i cały czas utrzymywać od niego odległość 1 metra. Żeby utrudnić zadanie, w mieście znajdują się tunele, przez które pojazd może przejechać ale dron nie jest w stanie przelecieć. Odpowiedni algorytm musi więc wyznaczyć taką trasę, żeby ominąć tunel i nie zgubić autka. Należy przy tym zachować bezpieczną odległość od przeszkód i śledzonego celu. Misja musi być wykonana w pełni autonomicznie - bez udziału operatora przy sterowaniu dronem.  

![autko](/projects/auav/auav_real.png "AUAV Chase")

System został oparty o ROS (Robot Operating System), który zapewnia komunikację pomiędzy poszczególnymi komponentami. Komponenty odpowiedzialne są przykładowo za: przetwarzanie obrazu, wyznaczanie optymalnej trasy omijającej przeszkody czy sterowanie dronem. Do wykrywania celu zostały wykorzystane zaawansowane algorytmy wizji komputerowej oparte o sieci neuronowe. Potencjalne przeszkody wyznaczane są na podstawie danych (chmury punktów) z kamery stereowizyjnej, która pozwala na stwierdzenie gdzie w przestrzeni znajdują się widziane obiekty. Wyznaczanie bezkolizyjnej i możliwie jak najbardziej optymalnej trasy realizowane jest przy użyciu biblioteki OMPL i algorytmów path plannigu takich jak A* czy RTT. Wykorzystanie ROSa pozwala na testowanie systemu w symulacji, co bardzo upraszcza jego rozwój. System jako całość jest stosunkowo złożony i wymaga dużej mocy obliczeniowej. Wyzwaniem jest więc jego uruchomienie na dronie i zapewnienie płynnego działania w czasie rzeczywistym.

