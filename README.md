Para correr el proyecto se deben ejecutar lo siguiente

```
pnpm install o npm install
-----
pnpm dev o npm run dev
```

- ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

  Use una SPA por facilidad en este caso, en cuanto a arquitectura por el tamaño del proyecto utilize algo muy basico con oportunidad de que se puede escalar si se requiere, en cuanto a herramientas utilize con lo que mas me he sentido comodo, typescript, react router dom y tailwind.
- ¿Hay alguna mejora que pueda hacer en su envío?

  Talvez organizar mejor el tema de componentes, tambien pude haber usado la layout con outlet en lugar del children pero al final no me convencio seria mirar que es lo mejor para el producto, en este caso me parecio mejor usar el children.

  Aprender a documentar
- ¿Qué haría de manera diferente si se le asignara más tiempo?

  Creo que para este tipo de proyectos usaria nextjs en vez de react solo, tal vez haria un custom hook que haga la petición al servicio de peliculas y series y que por parametro reciba el tipo si es pelicula o no, porque los dos hooks que hice son lo mismo solo cambia el tipo, y asi mismo pasaria en el servicio, pero eso depende de la aplicación, en este caso iria bien pero porque es lo mismo, si fuera diferente data o endpoint probablemente me quedaria con la mia.

  Tambien haria el tema de paginación completo, que en este caso no es dificil pero no me dio el tiempo, lo haria pasando la page al custom hook, y en el servicio multiplicar esa page * 20 items maximos y ya a partir de ese index en el array se sacarian los resultados, y para el tema de la url si no estoy mal, se usaria useSearchParams que vendria siendo ?page='x'
- Hacer algun test end to end ya que en este caso no se que haya alguna funcionalidad en especifico que sea demasiado importante en la aplicación, por ejemplo para mi es mas importante que se muestre el listado inicial de peliculas que el filter de releaseYear funcione bien, que tambien es importante porque se tomaria como regla de negocio pero no es lo mas.
