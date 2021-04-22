export const EditProject = () => {

    return <form>
        <label>
            Project id
        </label>
        <input name="pid" type="text" />
        <label>
            Project name </label>
        <input name="pname" type="text" />

        <label>
            Project start</label>
        <input name="pstart" type="text" />

        <label>
            Project end </label>
        <input name="pend" type="text" />

        <button type="submit">Submit</button>
    </form>
}