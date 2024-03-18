from .dungeon import NODE_CLASS_MAPPINGS, NODE_DISPLAY_NAME_MAPPINGS

import os
import server
from aiohttp import web

WEBROOT = os.path.join(os.path.dirname(os.path.realpath(__file__)), "react-ui/build")

@server.PromptServer.instance.routes.get("/dungeon")
def dungeon_entrance(request):
    return web.FileResponse(os.path.join(WEBROOT, "index.html"))

server.PromptServer.instance.routes.static("/dungeon/static/css/", path=os.path.join(WEBROOT, "static/css"))
server.PromptServer.instance.routes.static("/dungeon/static/js/", path=os.path.join(WEBROOT, "static/js"))

__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS']
