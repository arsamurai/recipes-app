import { MoveLeft } from "lucide-react"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "@shared/ui/button"

const BackButton: FC<{ title?: string }> = ({ title }) => {
  const navigate = useNavigate()

  return (
    <Button variant="ghost" onClick={() => navigate(-1)} className="text-base">
      <MoveLeft />
      <span>{title ?? "Back"}</span>
    </Button>
  )
}
export default BackButton
