echo ""
echo "#######################"
echo "# Merge driver called #"
echo "#######################"
echo ""

echo "current: $1"
echo "---------"
cat $1
echo ""

echo " other: $2"
echo "---------"
cat $2
echo ""


echo "Resolving conflict ..."
node ./merge-automerge.js $1 $2
echo "Conflict resolved!"

echo "resolved: $2"
echo "---------"
cat $2
echo ""

exit 0
