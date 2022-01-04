function ProjectSearch() {
  return (
    <form>
      <div>
        <div>
          <label htmlFor="category">Year</label>
          <select id="category">
            <option value="environment">Environment</option>
            <option value="social">Social</option>
          </select>
        </div>
      </div>
    </form>
  )
}

export default ProjectSearch
