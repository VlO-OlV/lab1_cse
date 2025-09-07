import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/Table';

export const TableSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className='text-2xl'>Data Grid</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Data grids (tables) display tabular data in rows and columns, useful for presenting lists or datasets.</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Data grid with products</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Apple</TableCell>
                  <TableCell>$1.00</TableCell>
                  <TableCell>100</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Banana</TableCell>
                  <TableCell>$0.50</TableCell>
                  <TableCell>200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Orange</TableCell>
                  <TableCell>$0.75</TableCell>
                  <TableCell>150</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Data grid with users</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>user1@example.com</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className='hover:bg-gray-200 cursor-pointer'>Edit</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>user2@example.com</TableCell>
                  <TableCell>Inactive</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className='hover:bg-gray-200 cursor-pointer'>Edit</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}