const SkillsSection = ({skills}) => (
  <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {skills.map(skill => (
      <li key={skill.name} className="flex items-center gap-3">
        <img
          src={skill.imageUrl}
          alt={skill.name}
          className="w-10 h-10"
        />
        <p>{skill.name}</p>
      </li>
    ))}
  </ul>
)

export default SkillsSection
