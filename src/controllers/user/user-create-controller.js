export function userCreateController(req, res){
    const data = req.body;
    const user = userCreateRepository(data);
    return response.status(201).json(user);
}