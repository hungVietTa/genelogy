<?php
namespace App\Http\Controllers\Web;

use App\Models\Ancestor;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\Rule;


class AncestorController extends Controller
{

    public function getAncestors()
    {
        $firstPerson = Ancestor::where('direct', 1)->first();

        if (!$firstPerson) {
            return response()->json(['message' => 'No ancestors found'], 404);
        }

        $tree = $this->buildTree($firstPerson);
        $trees = [$tree];

        return response(['tree' => $trees]);
    }

    private function buildTree($person)
    {
        $tree = [
            'firstPerson' => $person,
            'spouses' => $person->spouses,
            'children' => [],
        ];

        $spouse = Ancestor::where('spouse_id', $person->id)->first();

        $children = Ancestor::where('parent_id', $person->id)->get();

        foreach ($children as $child) {
            $childTree = $this->buildTree($child);
            $new = [
                'firstPerson' => $childTree['firstPerson'],
                'spouses' => $childTree['spouses'],
                'children' => $childTree['children'],
            ];

            $tree['children'][] = $new;
        }

        return $tree;
    }

    private function isAssociativeArray($array) {
        if (!is_array($array)) {
            return false;
        }

        $keys = array_keys($array);
        return array_keys($keys) !== $keys;
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'gender' => 'required|integer',
            'parent_id' => Rule::requiredIf(is_null($request->input('spouse_id'))),
            'spouse_id' => Rule::requiredIf(is_null($request->input('parent_id'))),
            'spouse_id' => Rule::requiredIf(!$request->has('parent_id')),
        ]);

        $data = $request->all();

    if (empty($data['img_url'])) {
        unset($data['img_url']);
    }

    $ancestor = Ancestor::create($data);

        return response(['message' => 'Tạo thành công']);
    }

    public function show($id)
    {
        $ancestor = Ancestor::with('spouses')->find($id);

        if (!$ancestor) {
            return response(['message' => 'Ancestor not found']);
        }

        return response(["data" => $ancestor]);
    }

    public function update(Request $request, $id)
{
    $request->validate([
        'name' => 'required|string',
        'parent_id' => Rule::requiredIf(is_null($request->input('spouse_id'))),
        'spouse_id' => Rule::requiredIf(is_null($request->input('parent_id'))),
        'gender' => 'required|in:1,2',
    ]);

    $ancestor = Ancestor::findOrFail($id);

    $data = $request->all();

    if (empty($data['img_url'])) {
        unset($data['img_url']);
    }

    $ancestor->update($data);

    return response()->json(['message' => 'Cập nhật thành công'], 200);
}

public function undo($id)
{    if ($id == 134) {
    return response()->json(['message' => 'Ancestor has spouse or children. Deletion not allowed.'], 422);
    }

    $ancestor = Ancestor::findOrFail($id);

    // Check if the ancestor has no spouse and no children
    if (!$ancestor->children()->exists()) {
        $ancestor->delete();
        return response()->json(['message' => 'Thành công'], 200);
    }

    return response()->json(['message' => 'Không thể thực hiện hành động này vì còn người phụ thuộc'], 422);
}
}
