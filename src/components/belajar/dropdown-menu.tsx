import { Button } from '../ui/button'
import { 
    DropdownMenu, 
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger 
} from '../ui/dropdown-menu'

export function ExcelDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Excel</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Import</DropdownMenuItem>
                <DropdownMenuItem>Export</DropdownMenuItem>
                <DropdownMenuItem>Template</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant='destructive'>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}