
export default function Skills() {
    const skills = [
      {
        name: "HTML",
        color: "#e34f26",
        src: "https://cdn.simpleicons.org/html5?color=e34f26",
      },
      {
        name: "CSS",
        color: "#1572b6",
        src: "https://cdn.simpleicons.org/css3?color=1572b6",
      },
      {
        name: "JavaScript",
        color: "#f7df1e",
        src: "https://cdn.simpleicons.org/javascript?color=f7df1e",
      },
      {
        name: "Python",
        color: "#3776ab",
        src: "https://cdn.simpleicons.org/python?color=3776ab",
      },
      {
        name: "NestJS",
        color: "#e0234e",
        src: "https://cdn.simpleicons.org/nestjs?color=e0234e",
      },
      {
        name: "Next.js",
        color: "#ffffff",
        src: "https://cdn.simpleicons.org/nextdotjs/ffffff",
      },
      {
        name: "Tailwind CSS",
        color: "#38bdf8",
        src: "https://cdn.simpleicons.org/tailwindcss?color=38bdf8",
      },
      {
        name: "Git",
        color: "#f05032",
        src: "https://cdn.simpleicons.org/git?color=f05032",
      },
    ];
    return (
      <div id="skills" className="w-full py-4 mb-5">
        <h5 className="font-bold text-lg mb-4">~/Habilidades/</h5>
        <div className="w-full overflow-hidden">
          <ul className="flex gap-20 justify-center text-sm font-mono animate-infinite-scroll">
            {[
              ...skills,
              ...skills,
            ].map((skill,index) => (
              <li
               key={index}
                className={` flex flex-col items-center justify-center text-center gap-2 `}
              >
                <img src={skill.src} alt={skill.name} className="w-10 h-10 object-contain" />
                <h1 className="font-bold text-sm">{skill.name}</h1>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    );
  }
  