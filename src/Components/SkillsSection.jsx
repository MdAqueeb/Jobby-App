const SkillsSection = ({skills}) => (
  <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {skills.map(skill => (
      <li key={skill.name} className="flex  justify-center items-center gap-3">
        {/* <img
          // src={skill.imageUrl}
          alt={skill.name}
          className="w-10 h-10"
        /> */}
        <p className="border px-2 py-1 rounded border-[#6366f1]">{skill.name}</p>
      </li>
    ))}
  </ul>
)

export default SkillsSection
