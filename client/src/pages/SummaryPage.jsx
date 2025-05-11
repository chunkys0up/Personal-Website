export default function AboutMe() {

    const Links = (name, link) => {
        return (
            <pre className="m-3 whitespace-pre-wrap break-words">
              {`${name}: `}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 underline cursor-pointer"
              >
                {link}
              </a>
            </pre>
          );
    };

  return (
    <div className="flex flex-col items-center font-mono">
      <h1 className="m-3 text-3xl">About Me</h1>

      <p>Hey, I'm Andrew!</p>

      <p className="whitespace-pre">
        {`
    I'm a Computer Science student at Irvine Valley College, currently working on full-stack projects (like this terminal)
    \nwith a strong focus on backend development. I've been building with frameworks such as Flask, FastAPI, and SpringBoot.
    \nOutside of coding, I enjoy reading manga/manhwas and watching basketball. As I prepare to transfer to Cal State Fullerton,
    \nI'm actively seeking internship opportunities to further grow as a software engineer.`}
      </p>

      <h1 className="mt-6 text-2xl">Links/Contact</h1>
      <p className="m-3">Contact me: andrewtnguyen0106@gmail.com</p>
      
      {Links("github", "https://github.com/chunkys0up")}
      {Links("linkedin", "https://linkedin.com/in/andrewtnguyen49345")}
      
    </div>
  );
}
