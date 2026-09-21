from uuid import uuid4


def new_id(prefix: str = "") -> str:
    unique_id = str(uuid4())

    if prefix:
        return f"{prefix}-{unique_id}"

    return unique_id